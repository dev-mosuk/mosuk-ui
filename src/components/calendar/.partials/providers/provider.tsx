'use client';

import React, { useMemo } from 'react';

import {
  CalendarDayViewContext,
  CalendarYearPickerContext,
} from '@/components/calendar/.partials/providers/context/context';
import type {
  CalendarDayViewProviderProps,
  CalendarYearPickerProviderProps,
} from '@/components/calendar/.partials/providers/provider.interface';

export function CalendarYearPickerProvider({
  children,
  isYearPickerOpen,
  setIsYearPickerOpen,
  calendarRef,
}: CalendarYearPickerProviderProps) {
  const value = useMemo(
    () => ({
      isYearPickerOpen,
      setIsYearPickerOpen,
      calendarRef,
    }),
    [isYearPickerOpen, setIsYearPickerOpen, calendarRef],
  );

  return (
    <CalendarYearPickerContext.Provider value={value}>
      {children}
    </CalendarYearPickerContext.Provider>
  );
}

export function CalendarDayViewProvider({
  children,
  dayViewBase,
  timeZone,
  visibleRange,
  weekdayStyle,
}: CalendarDayViewProviderProps) {
  const { end, start } = visibleRange;
  const value = useMemo(() => {
    if (!dayViewBase) {
      return null;
    }

    return {
      ...dayViewBase,
      timeZone,
      visibleRange: { end, start },
      weekdayStyle,
    };
  }, [dayViewBase, timeZone, end, start, weekdayStyle]);

  return (
    <CalendarDayViewContext.Provider value={value}>
      {children}
    </CalendarDayViewContext.Provider>
  );
}
