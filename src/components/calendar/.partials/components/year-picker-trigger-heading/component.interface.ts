import type { HTMLAttributes, ReactNode } from 'react';
import type { CalendarHeadingProps } from 'react-aria/useCalendar';

import type { CalendarYearPickerTriggerContextProps } from '@/components/calendar/.partials/components/year-picker-trigger/context';

export interface CalendarYearPickerTriggerHeadingProps
  extends
    Omit<HTMLAttributes<HTMLSpanElement>, 'children'>,
    Pick<CalendarHeadingProps, 'format' | 'offset'> {
  children?:
    | ReactNode
    | ((values: CalendarYearPickerTriggerContextProps) => ReactNode);
}
