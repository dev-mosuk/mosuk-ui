import type { HTMLAttributes, ReactNode } from 'react';

import type { CalendarYearPickerTriggerContextProps } from '@/components/actions/calendar/.partials/components/year-picker/trigger/context';

export interface CalendarYearPickerTriggerIndicatorProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?:
    | ReactNode
    | ((values: CalendarYearPickerTriggerContextProps) => ReactNode);
}
