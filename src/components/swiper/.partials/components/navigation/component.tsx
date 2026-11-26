'use client';

import { SwiperNavigationProps } from '@/components/swiper/.partials/components/navigation/component.interface';
import { SWIPER_NAVIGATION_DEFAULT_ORIENTATION } from '@/components/swiper/.partials/constants/component.constants';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function SwiperNavigation({
  orientation = SWIPER_NAVIGATION_DEFAULT_ORIENTATION,
  className,
  children,
  ...rest
}: SwiperNavigationProps) {
  return (
    <div
      {...rest}
      data-orientation={orientation}
      className={classNames(
        'mosuk-swiper-navigation',
        styles.navigation,
        className,
      )}
    >
      {children}
    </div>
  );
}
