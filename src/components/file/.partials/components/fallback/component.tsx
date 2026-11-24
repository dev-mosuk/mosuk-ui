'use client';

import type { FileFallbackProps } from '@/components/file/.partials/components/fallback/component.interface';
import { FileContext } from '@/components/file/.partials/providers/context/context';
import styles from '@/components/file/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type ElementType,
  useContext,
  useEffect,
  useState,
} from 'react';

export function FileFallback<C = 'span'>({
  as,
  ref,
  delayMs,
  className,
  ...rest
}: FileFallbackProps<C>) {
  const context = useContext(FileContext);
  const Component = (as ?? 'span') as ElementType;
  const status = context?.status ?? 'idle';
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

  if (!context) {
    throw new Error('File.Fallback must be used inside File');
  }

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
      className={classNames('mosuk-file-fallback', styles.fallback, className)}
    >
      {rest?.children}
    </Component>
  );
}
