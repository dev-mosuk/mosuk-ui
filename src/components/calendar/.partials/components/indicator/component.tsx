import classNames from 'classnames';
import React from 'react';

import type { CalendarCellIndicatorProps } from '@/components/calendar/.partials/components/indicator/component.interface';
import styles from '@/components/calendar/.partials/styles/component.module.css';

export function CalendarCellIndicator({
  className,
  ...rest
}: CalendarCellIndicatorProps) {
  return (
    <span
      {...rest}
      aria-hidden='true'
      className={classNames(
        'mosuk-calendar-cell-indicator',
        styles.indicator,
        className,
      )}
    />
  );
}
