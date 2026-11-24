'use client';

import { SwiperNavigationProps } from '@/components/swiper/.partials/components/navigation/component.interface';
import { SwiperNavigationDot } from '@/components/swiper/.partials/components/navigation-dot/component';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import { swiperSlideCount } from '@/components/swiper/.partials/utilities/util';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

export function SwiperNavigation({
  className,
  ...rest
}: SwiperNavigationProps) {
  const swiper = useSwiper();
  const [slideCount, setSlideCount] = useState(() => swiperSlideCount(swiper));
  const [activeIndex, setActiveIndex] = useState(() => swiper.realIndex ?? 0);

  useEffect(() => {
    const sync = () => {
      setSlideCount(swiperSlideCount(swiper));
      setActiveIndex(swiper.realIndex ?? 0);
    };

    sync();
    swiper.on('slideChange', sync);
    swiper.on('update', sync);
    swiper.on('breakpoint', sync);
    swiper.on('slidesLengthChange', sync);

    return () => {
      swiper.off('slideChange', sync);
      swiper.off('update', sync);
      swiper.off('breakpoint', sync);
      swiper.off('slidesLengthChange', sync);
    };
  }, [swiper]);

  if (slideCount <= 1) {
    return null;
  }

  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-swiper-navigation',
        styles.navigation,
        className,
      )}
    >
      {Array.from({ length: slideCount }, (_, index) => (
        <SwiperNavigationDot
          key={index}
          index={index}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}
