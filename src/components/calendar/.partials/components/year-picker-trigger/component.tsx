'use client';

import React, { useCallback, useMemo } from 'react';
import { Button } from 'react-aria-components/Button';
import { useCalendarHeading } from 'react-aria/useCalendar';

import type { CalendarYearPickerTriggerProps } from '@/components/calendar/.partials/components/year-picker-trigger/component.interface';
import { CalendarYearPickerTriggerContext } from '@/components/calendar/.partials/components/year-picker-trigger/context';
import {
  useCalendarState,
  useCalendarYearPickerState,
} from '@/components/calendar/.partials/hooks/hook';
import styles from '@/components/calendar/.partials/styles/component.module.css';
import { calendarClassName } from '@/components/calendar/.partials/utilities/util';

export function CalendarYearPickerTrigger({
  children,
  className,
  onKeyDown,
  onPress,
  ...rest
}: CalendarYearPickerTriggerProps) {
  const { isYearPickerOpen, setIsYearPickerOpen } =
    useCalendarYearPickerState();
  const state = useCalendarState();
  const monthYear = useCalendarHeading({}, state);
  const toggle = useCallback(() => {
    setIsYearPickerOpen(!isYearPickerOpen);
  }, [isYearPickerOpen, setIsYearPickerOpen]);
  const values = useMemo(
    () => ({
      isOpen: isYearPickerOpen,
      monthYear,
      toggle,
    }),
    [isYearPickerOpen, monthYear, toggle],
  );

  return (
    <CalendarYearPickerTriggerContext.Provider value={values}>
      <Button
        {...rest}
        aria-expanded={isYearPickerOpen}
        aria-label={`${monthYear}, year selector`}
        className={calendarClassName(
          className,
          'mosuk-calendar-year-picker-trigger',
          styles.yearTrigger,
        )}
        data-open={isYearPickerOpen || undefined}
        slot={null}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (event.key === 'Escape' && isYearPickerOpen) {
            event.preventDefault();
            setIsYearPickerOpen(false);
          }
        }}
        onPress={(event) => {
          onPress?.(event);
          toggle();
        }}
      >
        {typeof children === 'function' ? children(values) : children}
      </Button>
    </CalendarYearPickerTriggerContext.Provider>
  );
}
