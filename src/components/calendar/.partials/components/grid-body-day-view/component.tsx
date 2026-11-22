'use client';

import type { CalendarDate } from '@internationalized/date';
import React, { cloneElement, useMemo } from 'react';
import { useLocale } from 'react-aria-components/I18nProvider';

import type { CalendarDayViewGridBodyProps } from '@/components/calendar/.partials/components/grid-body-day-view/component.interface';
import { getDayViewGridRows } from '@/components/calendar/.partials/utilities/util';

export function CalendarDayViewGridBody({
  children,
  className,
  firstDayOfWeek,
  visibleRange,
}: CalendarDayViewGridBodyProps) {
  const { locale } = useLocale();
  const rows = useMemo(
    () =>
      getDayViewGridRows(
        visibleRange.start,
        visibleRange.end,
        locale,
        firstDayOfWeek,
      ),
    [firstDayOfWeek, locale, visibleRange.end, visibleRange.start],
  );

  return (
    <tbody className={className}>
      {rows.map((row, weekIndex) => (
        <tr key={weekIndex}>
          {row.map((date, dayIndex) =>
            date ? (
              cloneElement(children(date as CalendarDate), { key: dayIndex })
            ) : (
              <td key={dayIndex} />
            ),
          )}
        </tr>
      ))}
    </tbody>
  );
}
