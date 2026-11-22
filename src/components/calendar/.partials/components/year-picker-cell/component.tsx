'use client';

import React from 'react';
import { Button } from 'react-aria-components/Button';

import type { CalendarYearPickerCellProps } from '@/components/calendar/.partials/components/year-picker-cell/component.interface';
import { useCalendarYearPickerGrid } from '@/components/calendar/.partials/components/year-picker-grid/context';
import styles from '@/components/calendar/.partials/styles/component.module.css';
import { calendarClassName } from '@/components/calendar/.partials/utilities/util';

export function CalendarYearPickerCell({
  children,
  className,
  excludeFromTabOrder,
  onFocus,
  onPress,
  year,
  ...rest
}: CalendarYearPickerCellProps) {
  const {
    activeYear,
    currentYear,
    focusedYear,
    getFormattedYear,
    isYearPickerOpen,
    selectYear,
    setActiveYear,
  } = useCalendarYearPickerGrid();
  const isSelected = year === focusedYear;
  const isActive = year === activeYear;
  const formattedYear = getFormattedYear(year);
  const values = {
    formattedYear,
    isCurrentYear: year === currentYear,
    isOpen: isYearPickerOpen,
    isSelected,
    selectYear: () => selectYear(year),
    year,
  };

  return (
    <Button
      {...rest}
      aria-label={formattedYear}
      aria-selected={isSelected}
      className={calendarClassName(
        className,
        'mosuk-calendar-year-picker-cell',
        styles.yearCell,
      )}
      data-selected={isSelected || undefined}
      data-year={year}
      excludeFromTabOrder={
        excludeFromTabOrder ?? !(isYearPickerOpen && isActive)
      }
      slot={null}
      onFocus={(event) => {
        onFocus?.(event);
        setActiveYear(year);
      }}
      onPress={(event) => {
        onPress?.(event);
        selectYear(year);
      }}
    >
      {typeof children === 'function'
        ? children(values)
        : children || formattedYear}
    </Button>
  );
}
