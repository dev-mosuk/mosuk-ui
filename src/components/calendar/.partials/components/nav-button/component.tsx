'use client';

import { Button } from '@/components/button';
import type { CalendarNavButtonProps } from '@/components/calendar/.partials/components/nav-button/component.interface';
import { CALENDAR_NAV_BUTTON_DEFAULT_SIZE } from '@/components/calendar/.partials/constants/component.constants';
import styles from '@/components/calendar/.partials/styles/component.module.css';
import { calendarClassName } from '@/components/calendar/.partials/utilities/util';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Button as RacButton } from 'react-aria-components/Button';

export function CalendarNavButton({
  children,
  className,
  slot,
  size = CALENDAR_NAV_BUTTON_DEFAULT_SIZE,
  variant = Button.ENUMS.Variant.Ghost,
  ...rest
}: CalendarNavButtonProps) {
  const icon =
    slot === 'previous' ? (
      <ChevronLeft className={styles.navIcon} />
    ) : (
      <ChevronRight className={styles.navIcon} />
    );

  return (
    <RacButton
      {...rest}
      slot={slot}
      className={calendarClassName(
        className,
        'mosuk-calendar-nav-button',
        styles.navButton,
      )}
      render={(props) => {
        const {
          disabled,
          className: racClassName,
          children: racChildren,
          ...domProps
        } = props;

        return (
          <Button
            {...domProps}
            format={Button.ENUMS.Format.Icon}
            size={size}
            variant={variant}
            press={Button.ENUMS.Press.None}
            isDisabled={disabled}
            className={racClassName}
          >
            {racChildren}
          </Button>
        );
      }}
    >
      {children || icon}
    </RacButton>
  );
}
