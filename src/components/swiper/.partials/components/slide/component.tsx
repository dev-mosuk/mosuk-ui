'use client';

import { SwiperSlideProps } from '@/components/swiper/.partials/components/slide/component.interface';
import classNames from 'classnames';
import React from 'react';
import { SwiperSlide as BaseSwiperSlide } from 'swiper/react';

export function SwiperSlide({
  className,
  children,
  ...rest
}: SwiperSlideProps) {
  return (
    <BaseSwiperSlide
      {...rest}
      className={classNames('mosuk-swiper-slide', className)}
    >
      {children}
    </BaseSwiperSlide>
  );
}

// Swiper React detects slides via displayName.includes('SwiperSlide')
SwiperSlide.displayName = 'SwiperSlide';
