'use client';

import { COUNTER_LOCALE } from '@/components/counter/.partials/constants/component.constants';
import { CounterContext } from '@/components/counter/.partials/providers/context/context';
import type { CounterProviderProps } from '@/components/counter/.partials/providers/provider.interface';
import { counterFormatValue } from '@/components/counter/.partials/utilities/util';
import React, { useMemo } from 'react';

export function CounterProvider({
  children,
  value,
  animation,
  maximumFractionDigits,
}: CounterProviderProps) {
  const formatValue = useMemo(
    () => (next: number) =>
      counterFormatValue(next, maximumFractionDigits, COUNTER_LOCALE),
    [maximumFractionDigits],
  );

  const contextValue = useMemo(
    () => ({
      value,
      animation,
      maximumFractionDigits,
      formatValue,
    }),
    [value, animation, maximumFractionDigits, formatValue],
  );

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}
