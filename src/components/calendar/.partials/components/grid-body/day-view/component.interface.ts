import type { CalendarDate, DateValue } from '@internationalized/date';
import type { ReactElement } from 'react';

import type { CalendarDayOfWeek } from '@/components/actions/calendar/.partials/utilities/util';

export interface CalendarDayViewGridBodyProps {
  children: (date: CalendarDate) => ReactElement;
  className?: string;
  firstDayOfWeek?: CalendarDayOfWeek;
  visibleRange: { end: DateValue; start: DateValue };
}
