import type { ReactNode } from 'react';
import type { ButtonProps } from 'react-aria-components/Button';

import type { CalendarYearPickerTriggerContextProps } from '@/components/actions/calendar/.partials/components/year-picker/trigger/context';

export interface CalendarYearPickerTriggerProps extends Omit<
  ButtonProps,
  'children'
> {
  children?:
    | ReactNode
    | ((values: CalendarYearPickerTriggerContextProps) => ReactNode);
}
