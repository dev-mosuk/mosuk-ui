import type { ReactNode } from 'react';
import type { ButtonProps } from 'react-aria-components/Button';

import type { CalendarYearPickerTriggerContextProps } from '@/components/calendar/.partials/components/year-picker-trigger/context';

export interface CalendarYearPickerTriggerProps extends Omit<
  ButtonProps,
  'children'
> {
  children?:
    | ReactNode
    | ((values: CalendarYearPickerTriggerContextProps) => ReactNode);
}
