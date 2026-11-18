'use client';

import classNames from 'classnames';
import React from 'react';
import { CalendarHeading as CalendarHeadingPrimitive } from 'react-aria-components/Calendar';

import type { CalendarHeadingProps } from '@/components/actions/calendar/.partials/components/heading/component.interface';
import styles from '@/components/actions/calendar/.partials/styles/component.module.css';

export function CalendarHeading({ className, ...rest }: CalendarHeadingProps) {
  return (
    <CalendarHeadingPrimitive
      {...rest}
      className={classNames(
        'mosuk-calendar-heading',
        styles.heading,
        className,
      )}
    />
  );
}
