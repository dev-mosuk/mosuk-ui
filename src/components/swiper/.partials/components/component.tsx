'use client';

import { SwiperProps } from '@/components/swiper/.partials/components/component.interface';
import {
  SWIPER_DEFAULT_IS_RESET_INACTIVE,
  SWIPER_DEFAULT_MODULES,
  SWIPER_DEFAULT_OVERFLOW,
  SWIPER_DEFAULT_RESET_INACTIVE_TIMEOUT,
} from '@/components/swiper/.partials/constants/component.constants';
import { useSwiperResetInactive } from '@/components/swiper/.partials/hooks/hook';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper as BaseSwiper } from 'swiper/react';

export function Swiper({
  children,
  className,
  modules,
  overflow = SWIPER_DEFAULT_OVERFLOW,
  resetInactiveTimeout = SWIPER_DEFAULT_RESET_INACTIVE_TIMEOUT,
  isResetInactive = SWIPER_DEFAULT_IS_RESET_INACTIVE,
  onSwiper,
  ...rest
}: SwiperProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleSwiper = useCallback(
    (instance: SwiperClass) => {
      setSwiper(instance);
      onSwiper?.(instance);
    },
    [onSwiper],
  );

  useSwiperResetInactive({
    swiper,
    isEnabled: isResetInactive,
    timeout: resetInactiveTimeout,
  });

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
