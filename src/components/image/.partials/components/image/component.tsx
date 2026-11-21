'use client';

import { ImageImageProps } from '@/components/display/image/.partials/components/image/component.interface';
import { ImageContext } from '@/components/display/image/.partials/providers/context/context';
import styles from '@/components/display/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Images } from 'lucide-react';
import React, {
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export function ImageImage({
  src,
  onLoad,
  onError,
  loading = 'lazy',
  fetchPriority,
  ...rest
}: ImageImageProps) {
  const context = useContext(ImageContext);
  const imageRef = useRef<HTMLImageElement>(null);
  const source = src ? src : null;
  const [visibleSource, setVisibleSource] = useState(source);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const failed = Boolean(visibleSource) && failedSource === visibleSource;
  const cover = context?.cover;
  const reveal = context?.reveal;
  const isLoading = context?.isLoading ?? false;

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
      reveal();

      return;
    }

    const image = imageRef.current;

    if (!image) {
      return;
    }

    const show = () => {
      if (image.naturalWidth > 0) {
        reveal();

        return;
      }

      setFailedSource(visibleSource);
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
  }, [failed, isLoading, reveal, source, visibleSource]);

  if (!context) {
    throw new Error('Image.Image must be used inside Image');
  }

  const { shown, instant } = context;

  if (isLoading) {
    return null;
  }

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    onLoad?.(event);
  };

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    onError?.(event);
  };

  if (visibleSource && !failed) {
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
        className={classNames(
          'mosuk-image-media',
          styles.media,
          {
            [styles.shown]: shown && !instant,
            [styles.instant]: instant,
          },
          rest?.className,
        )}
        style={{
          ...rest?.style,
          transition: '0ms',
        }}
      />
    );
  }

  return (
    <Images
      aria-hidden
      strokeWidth={1.25}
      className={classNames('mosuk-image-media', styles.media, styles.icon, {
        [styles.shown]: shown && !instant,
        [styles.instant]: instant,
      })}
      style={{
        transition: '0ms',
      }}
    />
  );
}
