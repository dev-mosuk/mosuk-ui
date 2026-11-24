'use client';

import type { AvatarViewProps } from '@/components/avatar/.partials/components/view/component.interface';
import { AvatarContext } from '@/components/avatar/.partials/providers/context/context';
import styles from '@/components/avatar/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type CSSProperties,
  type ElementType,
  type SyntheticEvent,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';

export function AvatarView<C = 'img'>({
  as,
  ref,
  src,
  onLoad,
  onError,
  className,
  style,
  ...rest
}: AvatarViewProps<C>) {
  const context = useContext(AvatarContext);
  const node = useRef<HTMLElement | null>(null);
  const Component = (as ?? 'img') as ElementType;
  const source = src ?? null;
  const status = context?.status ?? 'idle';
  const setStatus = context?.setStatus;

  useLayoutEffect(() => {
    if (!setStatus) {
      return;
    }

    if (!source) {
      setStatus('idle');

      return;
    }

    setStatus('loading');

    const element = node.current;

    if (
      element instanceof HTMLImageElement &&
      element.complete &&
      element.naturalWidth > 0
    ) {
      setStatus('loaded');
    }
  }, [setStatus, source]);

  if (!context || !setStatus) {
    throw new Error('Avatar.View must be used inside Avatar');
  }

  const handleLoad = (event: SyntheticEvent<HTMLElement>) => {
    setStatus('loaded');
    onLoad?.(event as never);
  };

  const handleError = (event: SyntheticEvent<HTMLElement>) => {
    setStatus('error');
    onError?.(event as never);
  };

  if (!source || status === 'error') {
    return null;
  }

  return (
    <Component
      {...rest}
      ref={(value: HTMLElement | null) => {
        node.current = value;

        if (typeof ref === 'function') {
          ref(value);

          return;
        }

        if (ref) {
          ref.current = value;
        }
      }}
      src={source}
      alt={(rest as { alt?: string }).alt ?? ''}
      data-loaded={status === 'loaded' || undefined}
      onLoad={handleLoad}
      onError={handleError}
      className={classNames('mosuk-avatar-view', styles.view, className)}
      style={
        {
          ...style,
          ...(status !== 'loaded' ? { opacity: 0 } : null),
        } as CSSProperties
      }
    />
  );
}
