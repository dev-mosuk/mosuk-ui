'use client';

import { ScrollShadowProps } from '@/components/scroll-shadow/.partials/components/component.interface';
import {
  SCROLL_SHADOW_DEFAULT_IS_ENABLED,
  SCROLL_SHADOW_DEFAULT_OFFSET,
  SCROLL_SHADOW_DEFAULT_ORIENTATION,
  SCROLL_SHADOW_DEFAULT_SCROLLBAR,
  SCROLL_SHADOW_DEFAULT_SIZE,
  SCROLL_SHADOW_DEFAULT_VARIANT,
  SCROLL_SHADOW_DEFAULT_VISIBILITY,
} from '@/components/scroll-shadow/.partials/constants/component.constants';
import { useScrollShadow } from '@/components/scroll-shadow/.partials/hooks/hook';
import styles from '@/components/scroll-shadow/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { CSSProperties, Ref, useCallback, useRef } from 'react';

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);

    return;
  }

  if (ref) {
    (ref as { current: T | null }).current = value;
  }
}

export function ScrollShadow({
  ref,
  orientation = SCROLL_SHADOW_DEFAULT_ORIENTATION,
  size = SCROLL_SHADOW_DEFAULT_SIZE,
  offset = SCROLL_SHADOW_DEFAULT_OFFSET,
  scrollbar = SCROLL_SHADOW_DEFAULT_SCROLLBAR,
  isEnabled = SCROLL_SHADOW_DEFAULT_IS_ENABLED,
  visibility = SCROLL_SHADOW_DEFAULT_VISIBILITY,
  variant = SCROLL_SHADOW_DEFAULT_VARIANT,
  onVisibilityChange,
  style,
  ...rest
}: ScrollShadowProps) {
  const internalRef = useRef<HTMLDivElement>(null);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      internalRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  useScrollShadow({
    containerRef: internalRef,
    isEnabled,
    offset,
    onVisibilityChange,
    orientation,
    visibility,
  });

  return (
    <div
      {...rest}
      ref={setRef}
      data-orientation={orientation}
      data-scroll-shadow-mode={
        visibility === 'auto' && isEnabled ? 'auto' : 'manual'
      }
      data-scrollbar={scrollbar}
      data-variant={variant}
      style={
        {
          '--scroll-shadow-size': `${size}px`,
          '--scroll-shadow-offset': `${offset}px`,
          '--scroll-shadow-scrollbar': scrollbar,
          ...style,
        } as CSSProperties
      }
      className={classNames(
        'mosuk-scroll-shadow',
        'group/scroll-shadow',
        styles.scrollShadow,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
