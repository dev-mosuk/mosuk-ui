import type { DateValue } from '@internationalized/date';
import type { ReactElement } from 'react';

import type {
  CalendarDayOfWeek,
  CalendarWeekdayStyle,
} from '@/components/calendar/.partials/utilities/util';

export interface CalendarDayViewGridHeaderProps {
  children: (day: string) => ReactElement;
  className?: string;
  firstDayOfWeek?: CalendarDayOfWeek;
  timeZone?: string;
  visibleRange: { end: DateValue; start: DateValue };
  weekdayStyle?: CalendarWeekdayStyle;
}
