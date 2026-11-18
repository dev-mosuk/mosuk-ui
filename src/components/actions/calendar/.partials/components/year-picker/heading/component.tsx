'use client';

import classNames from 'classnames';
import React from 'react';
import { useCalendarHeading } from 'react-aria/useCalendar';

import type { CalendarYearPickerTriggerHeadingProps } from '@/components/actions/calendar/.partials/components/year-picker/heading/component.interface';
import { useCalendarYearPickerTrigger } from '@/components/actions/calendar/.partials/components/year-picker/trigger/context';
import { useCalendarState } from '@/components/actions/calendar/.partials/hooks/hook';
import styles from '@/components/actions/calendar/.partials/styles/component.module.css';

export function CalendarYearPickerTriggerHeading({
  children,
  className,
  format,
  offset,
  ...rest
}: CalendarYearPickerTriggerHeadingProps) {
  const values = useCalendarYearPickerTrigger();
  const state = useCalendarState();
  const heading = useCalendarHeading({ format, offset }, state);

  return (
    <span
      {...rest}
      className={classNames(
        'mosuk-calendar-year-picker-heading',
        styles.yearHeading,
        className,
      )}
    >
      {typeof children === 'function' ? children(values) : children || heading}
    </span>
  );
}
