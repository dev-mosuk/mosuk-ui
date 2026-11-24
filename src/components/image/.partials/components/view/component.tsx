'use client';

import { ImageViewProps } from '@/components/image/.partials/components/view/component.interface';
import { IMAGE_VIEW_DEFAULT_LOADING } from '@/components/image/.partials/constants/component.constants';
import { useImage } from '@/components/image/.partials/hooks/hook';
import styles from '@/components/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  SyntheticEvent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export function ImageView({
  src,
  onLoad,
  onError,
  loading = IMAGE_VIEW_DEFAULT_LOADING,
  fetchPriority,
  ...rest
}: ImageViewProps) {
  const { shown, instant, cover, reveal, isLoading, status, setStatus } =
    useImage();
  const imageRef = useRef<HTMLImageElement>(null);
  const source = src ? src : null;
  const [visibleSource, setVisibleSource] = useState(source);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const failed = Boolean(visibleSource) && failedSource === visibleSource;

  useLayoutEffect(() => {
    if (!source) {
      setStatus('idle');

      return;
    }

    setStatus('loading');

    const image = imageRef.current;

    if (image && image.complete && image.naturalWidth > 0) {
      setStatus('loaded');
    }
  }, [setStatus, source]);

  useLayoutEffect(() => {
    if (!cover || isLoading || visibleSource === source) {
      return;
    }

    cover();

    const frame = requestAnimationFrame(() => {
      setVisibleSource(source);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [cover, isLoading, source, visibleSource]);

  useLayoutEffect(() => {
    if (!reveal || isLoading || visibleSource !== source) {
      return;
    }

    if (!visibleSource || failed) {
      if (failed) {
        setStatus('error');
      }

      reveal();

      return;
    }

    const image = imageRef.current;

    if (!image) {
      return;
    }

    const show = () => {
      if (image.naturalWidth > 0) {
        setStatus('loaded');
        reveal();

        return;
      }

      setFailedSource(visibleSource);
      setStatus('error');
      reveal();
    };

    const deferred =
      image.loading === 'lazy' &&
      image.naturalWidth === 0 &&
      image.currentSrc === '';

    if (image.complete && !deferred) {
      show();

      return;
    }

    const handleSettle = () => {
      show();
    };

    image.addEventListener('load', handleSettle);
    image.addEventListener('error', handleSettle);

    return () => {
      image.removeEventListener('load', handleSettle);
      image.removeEventListener('error', handleSettle);
    };
  }, [failed, isLoading, reveal, setStatus, source, visibleSource]);

  if (isLoading) {
    return null;
  }

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    setStatus('loaded');
    onLoad?.(event);
  };

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    setStatus('error');
    onError?.(event);
  };

  if (!source || status === 'error' || failed) {
    return null;
  }

  if (!visibleSource) {
    return null;
  }

  return (
    <img
      {...rest}
      ref={imageRef}
      src={visibleSource}
      alt={rest?.alt ?? ''}
      loading={loading}
      fetchPriority={fetchPriority ?? (loading === 'eager' ? 'high' : 'low')}
      onLoad={handleLoad}
      onError={handleError}
      data-shown={shown && !instant ? true : undefined}
      data-instant={instant || undefined}
      className={classNames('mosuk-image-view', styles.view, rest?.className)}
      style={{
        ...rest?.style,
        transition: '0ms',
      }}
    />
  );
}
