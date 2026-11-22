'use client';

import classNames from 'classnames';
import React from 'react';
import { CalendarGrid as CalendarGridPrimitive } from 'react-aria-components/Calendar';

import type { CalendarGridProps } from '@/components/calendar/.partials/components/grid/component.interface';
import { useCalendarDayView } from '@/components/calendar/.partials/hooks/hook';
import { CalendarDayViewContext } from '@/components/calendar/.partials/providers/context/context';
import styles from '@/components/calendar/.partials/styles/component.module.css';

export function CalendarGrid({
  children,
  className,
  weekdayStyle = 'short',
  ...rest
}: CalendarGridProps) {
  const dayView = useCalendarDayView();
  const grid = (
    <CalendarGridPrimitive
      {...rest}
      className={classNames('mosuk-calendar-grid', styles.grid, className)}
      data-slot='calendar-grid'
      weekdayStyle={weekdayStyle}
    >
      {children}
    </CalendarGridPrimitive>
  );

  if (!dayView) {
    return grid;
  }

  return (
    <CalendarDayViewContext.Provider value={{ ...dayView, weekdayStyle }}>
      {grid}
    </CalendarDayViewContext.Provider>
  );
}
