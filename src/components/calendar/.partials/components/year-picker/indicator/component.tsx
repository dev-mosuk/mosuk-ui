import classNames from 'classnames';
import { ChevronRight } from 'lucide-react';
import React from 'react';

import type { CalendarYearPickerTriggerIndicatorProps } from '@/components/calendar/.partials/components/year-picker/indicator/component.interface';
import { useCalendarYearPickerTrigger } from '@/components/calendar/.partials/components/year-picker/trigger/context';
import styles from '@/components/calendar/.partials/styles/component.module.css';

export function CalendarYearPickerTriggerIndicator({
  children,
  className,
  ...rest
}: CalendarYearPickerTriggerIndicatorProps) {
  const values = useCalendarYearPickerTrigger();

  return (
    <span
      {...rest}
      aria-hidden='true'
      className={classNames(
        'mosuk-calendar-year-picker-indicator',
        styles.yearIndicator,
        className,
      )}
    >
      {typeof children === 'function'
        ? children(values)
        : children || <ChevronRight className={styles.yearIndicatorIcon} />}
    </span>
  );
}
