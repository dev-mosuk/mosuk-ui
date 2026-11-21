'use client';

import classNames from 'classnames';
import React from 'react';
import { CalendarGridHeader as CalendarGridHeaderPrimitive } from 'react-aria-components/Calendar';

import type { CalendarGridHeaderProps } from '@/components/actions/calendar/.partials/components/grid-header/component.interface';
import { CalendarDayViewGridHeader } from '@/components/actions/calendar/.partials/components/grid-header/day-view/component';
import { useCalendarDayView } from '@/components/actions/calendar/.partials/hooks/hook';
import styles from '@/components/actions/calendar/.partials/styles/component.module.css';

export function CalendarGridHeader({
  children,
  className,
  ...rest
}: CalendarGridHeaderProps) {
  const dayView = useCalendarDayView();
  const headerClassName = classNames(
    'mosuk-calendar-grid-header',
    styles.gridHeader,
    className,
  );

  if (dayView && dayView.days >= 7) {
    return (
      <CalendarDayViewGridHeader
        className={headerClassName}
        firstDayOfWeek={dayView.firstDayOfWeek}
        timeZone={dayView.timeZone}
        visibleRange={dayView.visibleRange}
        weekdayStyle={dayView.weekdayStyle}
      >
        {children}
      </CalendarDayViewGridHeader>
    );
  }

  return (
    <CalendarGridHeaderPrimitive {...rest} className={headerClassName}>
      {children}
    </CalendarGridHeaderPrimitive>
  );
}
