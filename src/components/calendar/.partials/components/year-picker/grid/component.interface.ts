import type { HTMLAttributes, ReactNode } from 'react';
import type { CalendarYearPickerProps } from 'react-aria/useCalendar';

export interface CalendarYearPickerGridProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    Pick<CalendarYearPickerProps, 'format' | 'visibleYears'> {
  children?: ReactNode;
}
