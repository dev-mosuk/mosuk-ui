import type { ReactNode } from 'react';

import type {
  CalendarDayViewContextProps,
  CalendarYearPickerContextProps,
} from '@/components/actions/calendar/.partials/providers/context/context.interface';

export interface CalendarYearPickerProviderProps extends CalendarYearPickerContextProps {
  children?: ReactNode;
}

export interface CalendarDayViewProviderProps {
  children?: ReactNode;
  dayViewBase?: Pick<CalendarDayViewContextProps, 'days' | 'firstDayOfWeek'>;
  timeZone: string;
  visibleRange: CalendarDayViewContextProps['visibleRange'];
  weekdayStyle?: CalendarDayViewContextProps['weekdayStyle'];
}
