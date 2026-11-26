'use client';

import { ImageViewProps } from '@/components/image/.partials/components/view/component.interface';
import { IMAGE_VIEW_DEFAULT_LOADING } from '@/components/image/.partials/constants/component.constants';
import { useImage } from '@/components/image/.partials/hooks/hook';
import styles from '@/components/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type ElementType,
  type SyntheticEvent,
  useLayoutEffect,
} from 'react';

export function ImageView<C = 'img'>({
  as,
  ref,
  src,
  onLoad,
  onError,
  loading = IMAGE_VIEW_DEFAULT_LOADING,
  fetchPriority,
  className,
  style,
  ...rest
}: ImageViewProps<C>) {
  const { shown, instant, cover, reveal, isLoading, setStatus } = useImage();
  const Component = (as ?? 'img') as ElementType;
  const source = src ? src : null;

  useLayoutEffect(() => {
    if (isLoading) {
      return;
    }

    if (!source) {
      setStatus('idle');
      reveal();

      return;
    }

    cover();
    setStatus('loading');
  }, [cover, isLoading, reveal, setStatus, source]);

  if (isLoading || !source) {
    return null;
  }

  const handleLoad = (event: SyntheticEvent<HTMLElement>) => {
    setStatus('loaded');
    reveal();
    onLoad?.(event as never);
  };

  const handleError = (event: SyntheticEvent<HTMLElement>) => {
    setStatus('error');
    reveal();
    onError?.(event as never);
  };

  return (
    <Component
      {...rest}
      ref={ref}
      src={source}
      alt={(rest as { alt?: string }).alt ?? ''}
      loading={loading}
      fetchPriority={fetchPriority ?? (loading === 'eager' ? 'high' : 'low')}
      onLoad={handleLoad}
      onError={handleError}
      data-shown={shown ? true : undefined}
      data-instant={instant || undefined}
      className={classNames('mosuk-image-view', styles.view, className)}
      style={{
        ...style,
        transition: '0ms',
      }}
    />
  );
}
