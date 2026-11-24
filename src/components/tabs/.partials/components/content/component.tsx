'use client';

import { Swiper } from '@/components/swiper';
import { TabsContentProps } from '@/components/tabs/.partials/components/content/component.interface';
import {
  TABS_CONTENT_DEFAULT_IS_SHADOW,
  TABS_CONTENT_DEFAULT_VARIANT,
} from '@/components/tabs/.partials/constants/component.constants';
import { useTabs } from '@/components/tabs/.partials/hooks/hook';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Swiper as SwiperClass } from 'swiper';

export function TabsContent({
  children,
  className,
  style,
  onSlideChange,
  onTouchStart,
  onTouchEnd,
  onSliderMove,
  onSlideChangeTransitionStart,
  onSlideChangeTransitionEnd,
  onTransitionEnd,
  variant = TABS_CONTENT_DEFAULT_VARIANT,
  isShadow = TABS_CONTENT_DEFAULT_IS_SHADOW,
  ...rest
}: TabsContentProps) {
  const { value, setValue, setContentValues, setSwiper, orientation } =
    useTabs();
  const [isShadowActive, setIsShadowActive] = useState(false);

  const contentValues = useMemo(() => {
    const values: any[] = [];

    Children.forEach(children, (child) => {
      if (!isValidElement(child)) {
        return;
      }

      const childValue = (child.props as { value?: any }).value;
      if (childValue !== undefined) {
        values.push(childValue);
      }
    });

    return values;
  }, [children]);

  useEffect(() => {
    setContentValues(contentValues);
  }, [contentValues, setContentValues]);

  const activateShadow = useCallback(() => {
    if (!isShadow) {
      return;
    }
    setIsShadowActive(true);
  }, [isShadow]);

  const deactivateShadow = useCallback(() => {
    setIsShadowActive(false);
  }, []);

  const initialSlide = Math.max(0, contentValues.indexOf(value));

  const handleSwiper = (swiper: SwiperClass) => {
    setSwiper(swiper);
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    onSlideChange?.(swiper);

    const next = contentValues[swiper.activeIndex];
    if (next === undefined || Object.is(next, value)) {
      return;
    }

    setValue(next);
  };

  return (
    <Swiper
      {...rest}
      slidesPerView={1}
      initialSlide={initialSlide}
      direction={orientation === 'vertical' ? 'vertical' : 'horizontal'}
      onSwiper={handleSwiper}
      onSlideChange={handleSlideChange}
      onTouchStart={(swiper, event) => {
        activateShadow();
        onTouchStart?.(swiper, event);
      }}
      onSliderMove={(swiper, event) => {
        activateShadow();
        onSliderMove?.(swiper, event);
      }}
      onSlideChangeTransitionStart={(swiper) => {
        activateShadow();
        onSlideChangeTransitionStart?.(swiper);
      }}
      onTouchEnd={(swiper, event) => {
        if (!swiper.animating) {
          deactivateShadow();
        }
        onTouchEnd?.(swiper, event);
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        deactivateShadow();
        onSlideChangeTransitionEnd?.(swiper);
      }}
      onTransitionEnd={(swiper) => {
        deactivateShadow();
        onTransitionEnd?.(swiper);
      }}
      data-variant={variant}
      data-shadow={isShadow ? 'true' : undefined}
      data-shadow-active={
        isShadow && isShadowActive ? 'true' : undefined
      }
      data-orientation={orientation}
      style={style}
      className={classNames('mosuk-tabs-content', styles.content, className)}
    >
      {children}
    </Swiper>
  );
}
