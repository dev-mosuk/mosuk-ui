'use client';

import { SliderContext } from '@/components/slider/.partials/providers/context/context';
import type { SliderProviderProps } from '@/components/slider/.partials/providers/provider.interface';
import React from 'react';

export function SliderProvider({
  children,
  min,
  max,
  step,
  values,
  orientation,
  thumbAlignment,
  isDisabled,
}: SliderProviderProps) {
  return (
    <SliderContext.Provider
      value={{
        min,
        max,
        step,
        values,
        orientation,
        thumbAlignment,
        isDisabled,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}
