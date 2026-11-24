'use client';

import type { ImageFallbackProps } from '@/components/image/.partials/components/fallback/component.interface';
import { useImage } from '@/components/image/.partials/hooks/hook';
import styles from '@/components/image/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type ElementType,
  useEffect,
  useState,
} from 'react';

export function ImageFallback<C = 'span'>({
  as,
  ref,
  delayMs,
  className,
  ...rest
}: ImageFallbackProps<C>) {
  const { status } = useImage();
  const Component = (as ?? 'span') as ElementType;
  const [isDelayPassed, setIsDelayPassed] = useState(
    delayMs == null || delayMs <= 0,
  );

  useEffect(() => {
    if (delayMs == null || delayMs <= 0) {
      setIsDelayPassed(true);

      return;
    }

    setIsDelayPassed(false);

    const timer = window.setTimeout(() => {
      setIsDelayPassed(true);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [delayMs]);

  if (status === 'loaded') {
    return null;
  }

  if (!isDelayPassed) {
    return null;
  }

  return (
    <Component
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-image-fallback',
        styles.fallback,
        className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
