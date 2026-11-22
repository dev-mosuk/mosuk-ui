'use client';

import React, { cloneElement, useMemo } from 'react';
import { useLocale } from 'react-aria-components/I18nProvider';

import type { CalendarDayViewGridHeaderProps } from '@/components/calendar/.partials/components/grid-header-day-view/component.interface';
import { getDayViewWeekDayLabels } from '@/components/calendar/.partials/utilities/util';

export function CalendarDayViewGridHeader({
  children,
  className,
  firstDayOfWeek,
  timeZone = 'UTC',
  visibleRange,
  weekdayStyle = 'short',
}: CalendarDayViewGridHeaderProps) {
  const { locale } = useLocale();
  const weekDays = useMemo(
    () =>
      getDayViewWeekDayLabels(
        visibleRange.start,
        locale,
        firstDayOfWeek,
        weekdayStyle,
        timeZone,
      ),
    [firstDayOfWeek, locale, timeZone, visibleRange.start, weekdayStyle],
  );

  return (
    <thead aria-hidden='true' className={className}>
      <tr>
        {weekDays.map((day, index) =>
          cloneElement(children(day), { key: index }),
        )}
      </tr>
    </thead>
  );
}
