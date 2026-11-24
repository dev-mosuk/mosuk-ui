'use client';

import { TabsContext } from '@/components/tabs/.partials/providers/context/context';
import type { TabsProviderProps } from '@/components/tabs/.partials/providers/provider.interface';
import React, { useCallback, useMemo, useRef } from 'react';
import type { Swiper as SwiperClass } from 'swiper';

export function TabsProvider({
  children,
  size,
  orientation,
  variant,
  value,
  setValue,
  activateOnFocus,
  loopFocus,
}: TabsProviderProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const contentValuesRef = useRef<any[]>([]);
  const valueRef = useRef(value);
  valueRef.current = value;

  const slideToValue = useCallback((next: any) => {
    const index = contentValuesRef.current.indexOf(next);
    const swiper = swiperRef.current;

    if (index < 0 || !swiper || swiper.activeIndex === index) {
      return;
    }

    swiper.slideTo(index);
  }, []);

  const setSwiper = useCallback(
    (swiper: SwiperClass | null) => {
      swiperRef.current = swiper;
      if (swiper) {
        slideToValue(valueRef.current);
      }
    },
    [slideToValue],
  );

  const setContentValues = useCallback(
    (values: any[]) => {
      contentValuesRef.current = values;
      slideToValue(valueRef.current);
    },
    [slideToValue],
  );

  const contextValue = useMemo(
    () => ({
      size,
      orientation,
      variant,
      value,
      setValue,
      activateOnFocus,
      loopFocus,
      setContentValues,
      setSwiper,
      slideToValue,
    }),
    [
      size,
      orientation,
      variant,
      value,
      setValue,
      activateOnFocus,
      loopFocus,
      setContentValues,
      setSwiper,
      slideToValue,
    ],
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
}
