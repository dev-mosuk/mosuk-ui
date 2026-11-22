'use client';

import { ScrollShadowProps } from '@/components/scroll-shadow/.partials/components/component.interface';
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
  orientation = 'vertical',
  size = 40,
  offset = 0,
  isScrollBarHidden = false,
  isEnabled = true,
  visibility = 'auto',
  variant = 'fade',
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
      data-scrollbar={isScrollBarHidden ? 'hidden' : undefined}
      data-variant={variant}
      style={
        {
          '--scroll-shadow-size': `${size}px`,
          '--scroll-shadow-offset': `${offset}px`,
          ...style,
        } as CSSProperties
      }
      className={classNames(
        'mosuk-scroll-shadow',
        '@container/scroll-shadow',
        'group/scroll-shadow',
        styles.scrollShadow,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
