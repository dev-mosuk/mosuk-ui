'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Button } from 'react-aria-components/Button';

import type { CalendarNavButtonProps } from '@/components/actions/calendar/.partials/components/nav-button/component.interface';
import styles from '@/components/actions/calendar/.partials/styles/component.module.css';
import { calendarClassName } from '@/components/actions/calendar/.partials/utilities/util';

export function CalendarNavButton({
  children,
  className,
  slot,
  ...rest
}: CalendarNavButtonProps) {
  const icon =
    slot === 'previous' ? (
      <ChevronLeft className={styles.navIcon} />
    ) : (
      <ChevronRight className={styles.navIcon} />
    );

  return (
    <Button
      {...rest}
      className={calendarClassName(
        className,
        'mosuk-calendar-nav-button',
        styles.navButton,
      )}
      slot={slot}
    >
      {children || icon}
    </Button>
  );
}
