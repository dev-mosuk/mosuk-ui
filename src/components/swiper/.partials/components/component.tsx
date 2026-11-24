'use client';

import { SwiperProps } from '@/components/swiper/.partials/components/component.interface';
import {
  SWIPER_DEFAULT_MODULES,
  SWIPER_DEFAULT_OVERFLOW,
} from '@/components/swiper/.partials/constants/component.constants';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper as BaseSwiper } from 'swiper/react';

export function Swiper({
  children,
  className,
  modules,
  overflow = SWIPER_DEFAULT_OVERFLOW,
  onSwiper,
  ...rest
}: SwiperProps) {
  const handleSwiper = useCallback(
    (swiper: SwiperClass) => {
      onSwiper?.(swiper);
    },
    [onSwiper],
  );

  return (
    <BaseSwiper
      {...rest}
      modules={modules ?? [...SWIPER_DEFAULT_MODULES]}
      onSwiper={handleSwiper}
      data-overflow={overflow}
      className={classNames('mosuk-swiper', '@container/swiper', className)}
    >
      {children}
    </BaseSwiper>
  );
}
