'use client';

import classNames from 'classnames';
import React from 'react';
import { CalendarHeaderCell as CalendarHeaderCellPrimitive } from 'react-aria-components/Calendar';

import type { CalendarHeaderCellProps } from '@/components/calendar/.partials/components/header-cell/component.interface';
import styles from '@/components/calendar/.partials/styles/component.module.css';

export function CalendarHeaderCell({
  className,
  ...rest
}: CalendarHeaderCellProps) {
  return (
    <CalendarHeaderCellPrimitive
      {...rest}
      className={classNames(
        'mosuk-calendar-header-cell',
        styles.headerCell,
        className,
      )}
    />
  );
}
