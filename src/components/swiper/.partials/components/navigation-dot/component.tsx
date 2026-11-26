'use client';

import { SwiperNavigationDotProps } from '@/components/swiper/.partials/components/navigation-dot/component.interface';
import { SWIPER_NAVIGATION_DOT_DEFAULT_IS_ACTIVE } from '@/components/swiper/.partials/constants/component.constants';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function SwiperNavigationDot<C extends ElementType = 'button'>({
  as,
  ref,
  isActive = SWIPER_NAVIGATION_DOT_DEFAULT_IS_ACTIVE,
  className,
  children,
  ...rest
}: SwiperNavigationDotProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  const isNativeButton = !as || as === 'button';

  return (
    <Component
      {...rest}
      ref={ref}
      type={isNativeButton ? 'button' : rest.type}
      aria-current={isActive || undefined}
      data-active={isActive || undefined}
      className={classNames(
        'mosuk-swiper-navigation-dot',
        styles.dot,
        className,
      )}
    >
      {children}
    </Component>
  );
}
