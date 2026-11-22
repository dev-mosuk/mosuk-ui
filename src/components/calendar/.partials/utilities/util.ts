import type { DateValue } from '@internationalized/date';
import { isSameDay, startOfWeek, startOfYear } from '@internationalized/date';
import classNames from 'classnames';

export type CalendarDayOfWeek =
  | 'sun'
  | 'mon'
  | 'tue'
  | 'wed'
  | 'thu'
  | 'fri'
  | 'sat';

export type CalendarWeekdayStyle = 'narrow' | 'short' | 'long';

export function getGregorianYearOffset(identifier: string): number {
  switch (identifier) {
    case 'buddhist':
      return 543;
    case 'ethiopic':
    case 'ethioaa':
      return -8;
    case 'coptic':
      return -284;
    case 'hebrew':
      return 3760;
    case 'indian':
      return -78;
    case 'islamic-civil':
    case 'islamic-tbla':
    case 'islamic-umalqura':
      return -579;
    case 'persian':
      return -600;
    case 'roc':
    case 'japanese':
    case 'gregory':
    default:
      return 0;
  }
}

export function getYearRange(
  start?: DateValue | null,
  end?: DateValue | null,
): DateValue[] {
  const years: DateValue[] = [];

  if (!start || !end) {
    return years;
  }

  let current = startOfYear(start);

  while (current.compare(end) <= 0) {
    years.push(current);

    const next = startOfYear(current.add({ years: 1 }));

    if (isSameDay(current, next) || next.compare(current) <= 0) {
      break;
    }

    current = next;
  }

  return years;
}

export function getDayViewWeekDayLabels(
  start: DateValue,
  locale: string,
  firstDayOfWeek: CalendarDayOfWeek | undefined,
  weekdayStyle: CalendarWeekdayStyle = 'short',
  timeZone = 'UTC',
): string[] {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: weekdayStyle,
    timeZone,
  });
  const weekStart = startOfWeek(start, locale, firstDayOfWeek);
  const labels: string[] = [];
  let date = weekStart;

  for (let index = 0; index < 7; index += 1) {
    labels.push(formatter.format(date.toDate(timeZone)));
    const next = date.add({ days: 1 });

    if (isSameDay(date, next)) {
      break;
    }

    date = next;
  }

  while (labels.length < 7) {
    labels.push('');
  }

  return labels;
}

function buildDayViewWeekRow(
  rowStart: DateValue,
  end: DateValue,
): (DateValue | null)[] {
  const row: (DateValue | null)[] = [];
  let date = rowStart;

  for (let index = 0; index < 7; index += 1) {
    row.push(date.compare(end) > 0 ? null : date);

    const next = date.add({ days: 1 });

    if (isSameDay(date, next)) {
      while (row.length < 7) {
        row.push(null);
      }

      return row;
    }

    date = next;
  }

  return row;
}

export function getDayViewGridRows(
  start: DateValue,
  end: DateValue,
  locale: string,
  firstDayOfWeek?: CalendarDayOfWeek,
): (DateValue | null)[][] {
  const rows: (DateValue | null)[][] = [];
  let rowStart = startOfWeek(start, locale, firstDayOfWeek);

  rows.push(buildDayViewWeekRow(rowStart, end));

  rowStart = rowStart.add({ weeks: 1 });

  while (rowStart.compare(end) <= 0) {
    rows.push(buildDayViewWeekRow(rowStart, end));
    const nextWeek = rowStart.add({ weeks: 1 });

    if (isSameDay(rowStart, nextWeek)) {
      break;
    }

    rowStart = nextWeek;
  }

  return rows;
}

export function calendarClassName<State>(
  className: string | ((state: State) => string) | undefined,
  ...tokens: Array<string | undefined | false>
) {
  if (typeof className === 'function') {
    return (state: State) => classNames(...tokens, className(state));
  }

  return classNames(...tokens, className);
}
