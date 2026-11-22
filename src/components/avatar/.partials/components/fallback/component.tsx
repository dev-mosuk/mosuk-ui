'use client';

import type { AvatarFallbackProps } from '@/components/avatar/.partials/components/fallback/component.interface';
import { AvatarContext } from '@/components/avatar/.partials/providers/context/context';
import styles from '@/components/avatar/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  type ElementType,
  useContext,
  useEffect,
  useState,
} from 'react';

export function AvatarFallback<C = 'span'>({
  as,
  ref,
  delayMs,
  className,
  ...rest
}: AvatarFallbackProps<C>) {
  const context = useContext(AvatarContext);
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
    throw new Error('Avatar.Fallback must be used inside Avatar');
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
      className={classNames(
        'mosuk-avatar-fallback',
        styles.fallback,
        className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
