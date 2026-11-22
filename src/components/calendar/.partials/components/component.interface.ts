import type { DateValue } from '@internationalized/date';
import type { Ref } from 'react';
import type {
  CalendarSelectionMode,
  CalendarProps as RacCalendarProps,
} from 'react-aria-components/Calendar';

export interface CalendarProps<
  T extends DateValue = DateValue,
  M extends CalendarSelectionMode = 'single',
> extends RacCalendarProps<T, M> {
  ref?: Ref<HTMLDivElement>;
  defaultYearPickerOpen?: boolean;
  isYearPickerOpen?: boolean;
  onYearPickerOpenChange?: (isOpen: boolean) => void;
}
