'use client';

import { SwiperHoverProps } from '@/components/swiper/.partials/components/hover/component.interface';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import { swiperSlideCount } from '@/components/swiper/.partials/utilities/util';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

export function SwiperHover({ className, ...rest }: SwiperHoverProps) {
  const swiper = useSwiper();
  const [slideCount, setSlideCount] = useState(() => swiperSlideCount(swiper));

  useEffect(() => {
    const sync = () => setSlideCount(swiperSlideCount(swiper));

    sync();
    swiper.on('update', sync);
    swiper.on('breakpoint', sync);
    swiper.on('slidesLengthChange', sync);

    return () => {
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
      className={classNames('mosuk-swiper-hover', styles.hover, className)}
    >
      {Array.from({ length: slideCount }, (_, index) => (
        <div
          key={index}
          className={styles.zone}
          onMouseEnter={() => swiper.slideTo(index)}
        />
      ))}
    </div>
  );
}
