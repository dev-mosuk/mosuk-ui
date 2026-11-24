import type { Button } from '@/components/button';
import type { CalendarYearPickerTriggerContextProps } from '@/components/calendar/.partials/components/year-picker-trigger/context';
import type { ReactNode } from 'react';
import type { ButtonProps as RacButtonProps } from 'react-aria-components/Button';

export type CalendarYearPickerTriggerProps = Omit<
  RacButtonProps,
  'children' | 'render'
> & {
  size?: Button.Props['size'];
  variant?: Button.Props['variant'];
  children?:
    | ReactNode
    | ((values: CalendarYearPickerTriggerContextProps) => ReactNode);
};
