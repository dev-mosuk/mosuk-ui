'use client';

import classNames from 'classnames';
import React from 'react';
import { CalendarGridBody as CalendarGridBodyPrimitive } from 'react-aria-components/Calendar';

import type { CalendarGridBodyProps } from '@/components/calendar/.partials/components/grid-body/component.interface';
import { CalendarDayViewGridBody } from '@/components/calendar/.partials/components/grid-body/day-view/component';
import { useCalendarDayView } from '@/components/calendar/.partials/hooks/hook';
import styles from '@/components/calendar/.partials/styles/component.module.css';

export function CalendarGridBody({
  children,
  className,
  ...rest
}: CalendarGridBodyProps) {
  const dayView = useCalendarDayView();
  const bodyClassName = classNames(
    'mosuk-calendar-grid-body',
    styles.gridBody,
    className,
  );

  if (dayView && dayView.days >= 7) {
    return (
      <CalendarDayViewGridBody
        className={bodyClassName}
        firstDayOfWeek={dayView.firstDayOfWeek}
        visibleRange={dayView.visibleRange}
      >
        {children}
      </CalendarDayViewGridBody>
    );
  }

  return (
    <CalendarGridBodyPrimitive {...rest} className={bodyClassName}>
      {children}
    </CalendarGridBodyPrimitive>
  );
}
