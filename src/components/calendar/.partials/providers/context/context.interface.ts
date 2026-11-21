import type { DateValue } from '@internationalized/date';
import type { RefObject } from 'react';

import type {
  CalendarDayOfWeek,
  CalendarWeekdayStyle,
} from '@/components/actions/calendar/.partials/utilities/util';

export interface CalendarYearPickerContextProps {
  isYearPickerOpen: boolean;
  setIsYearPickerOpen: (isOpen: boolean) => void;
  calendarRef: RefObject<HTMLDivElement | null>;
}

export interface CalendarDayViewContextProps {
  days: number;
  firstDayOfWeek?: CalendarDayOfWeek;
  timeZone: string;
  visibleRange: { end: DateValue; start: DateValue };
  weekdayStyle?: CalendarWeekdayStyle;
}
