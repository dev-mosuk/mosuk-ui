import classNames from 'classnames';
import React from 'react';

import type { CalendarHeaderProps } from '@/components/actions/calendar/.partials/components/header/component.interface';
import styles from '@/components/actions/calendar/.partials/styles/component.module.css';

export function CalendarHeader({
  children,
  className,
  ...rest
}: CalendarHeaderProps) {
  return (
    <div
      {...rest}
      className={classNames('mosuk-calendar-header', styles.header, className)}
    >
      {children}
    </div>
  );
}
