'use client';

import React, { Fragment } from 'react';

import { CalendarYearPickerCell } from '@/components/calendar/.partials/components/year-picker-cell/component';
import type { CalendarYearPickerGridBodyProps } from '@/components/calendar/.partials/components/year-picker-grid-body/component.interface';
import { useCalendarYearPickerGrid } from '@/components/calendar/.partials/components/year-picker-grid/context';

export function CalendarYearPickerGridBody({
  children,
}: CalendarYearPickerGridBodyProps) {
  const {
    currentYear,
    focusedYear,
    getFormattedYear,
    isYearPickerOpen,
    selectYear,
    years,
  } = useCalendarYearPickerGrid();

  return (
    <>
      {years.map((year) => {
        const isSelected = year === focusedYear;
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
          <Fragment key={year}>
            {typeof children === 'function' ? (
              children(values)
            ) : (
              <CalendarYearPickerCell year={year} />
            )}
          </Fragment>
        );
      })}
    </>
  );
}
