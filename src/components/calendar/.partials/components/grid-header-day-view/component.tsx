'use client';

import React, { cloneElement, useMemo } from 'react';
import { useLocale } from 'react-aria-components/I18nProvider';

import type { CalendarDayViewGridHeaderProps } from '@/components/calendar/.partials/components/grid-header-day-view/component.interface';
import {
  CALENDAR_DAY_VIEW_GRID_HEADER_DEFAULT_TIME_ZONE,
  CALENDAR_DEFAULT_WEEKDAY_STYLE,
} from '@/components/calendar/.partials/constants/component.constants';
import { getDayViewWeekDayLabels } from '@/components/calendar/.partials/utilities/util';

export function CalendarDayViewGridHeader({
  children,
  className,
  firstDayOfWeek,
  timeZone = CALENDAR_DAY_VIEW_GRID_HEADER_DEFAULT_TIME_ZONE,
  visibleRange,
  weekdayStyle = CALENDAR_DEFAULT_WEEKDAY_STYLE,
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
