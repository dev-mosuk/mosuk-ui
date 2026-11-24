'use client';

import { SwiperNavigationDotProps } from '@/components/swiper/.partials/components/navigation-dot/component.interface';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType, type MouseEvent } from 'react';
import { useSwiper } from 'swiper/react';

export function SwiperNavigationDot<C extends ElementType = 'button'>({
  as,
  ref,
  index,
  isActive,
  className,
  children,
  onClick,
  'aria-label': ariaLabel,
  ...rest
}: SwiperNavigationDotProps<C>) {
  const swiper = useSwiper();
  const Component = (as ?? 'button') as ElementType;
  const isNativeButton = !as || as === 'button';

  return (
    <Component
      {...rest}
      ref={ref}
      type={isNativeButton ? 'button' : rest.type}
      aria-current={isActive || undefined}
      aria-label={ariaLabel ?? `Go to slide ${index + 1}`}
      data-active={isActive || undefined}
      className={classNames(
        'mosuk-swiper-navigation-dot',
        styles.dot,
        className,
      )}
      onClick={(event: MouseEvent<HTMLElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }

        swiper.slideTo(index);
      }}
    >
      {children}
    </Component>
  );
}
