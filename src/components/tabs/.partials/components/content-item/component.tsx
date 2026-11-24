'use client';

import { TabsContentItemProps } from '@/components/tabs/.partials/components/content-item/component.interface';
import { useTabs } from '@/components/tabs/.partials/hooks/hook';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';
import { SwiperSlide as BaseSwiperSlide } from 'swiper/react';

export function TabsContentItem({
  value,
  className,
  children,
  ...rest
}: TabsContentItemProps) {
  const { value: activeValue } = useTabs();
  const isActive = Object.is(activeValue, value);

  return (
    <BaseSwiperSlide
      {...rest}
      data-value={value}
      data-active={isActive ? '' : undefined}
      role="tabpanel"
      aria-hidden={!isActive}
      className={classNames(
        'mosuk-tabs-content-item',
        styles.contentItem,
        className,
      )}
    >
      {children}
    </BaseSwiperSlide>
  );
}

// Swiper React detects slides via displayName.includes('SwiperSlide')
TabsContentItem.displayName = 'SwiperSlide';
