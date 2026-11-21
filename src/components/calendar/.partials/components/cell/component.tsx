'use client';

import React from 'react';
import { CalendarCell as CalendarCellPrimitive } from 'react-aria-components/Calendar';

import type { CalendarCellProps } from '@/components/calendar/.partials/components/cell/component.interface';
import styles from '@/components/calendar/.partials/styles/component.module.css';
import { calendarClassName } from '@/components/calendar/.partials/utilities/util';

export function CalendarCell({
  children,
  className,
  ...rest
}: CalendarCellProps) {
  return (
    <CalendarCellPrimitive
      {...rest}
      className={calendarClassName(
        className,
        'mosuk-calendar-cell',
        styles.cell,
      )}
    >
      {(values) => {
        if (typeof children === 'function') {
          return children(values);
        }

        return children || values.formattedDate;
      }}
    </CalendarCellPrimitive>
  );
}
