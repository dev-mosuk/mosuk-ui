import type { CalendarVariant } from '@/components/calendar/.partials/enums/component.enums';
import type { DateValue } from '@internationalized/date';
import type { Ref } from 'react';
import type {
  CalendarSelectionMode,
  CalendarProps as RacCalendarProps,
} from 'react-aria-components/Calendar';

export type CalendarProps<
  T extends DateValue = DateValue,
  M extends CalendarSelectionMode = 'single',
> = Omit<RacCalendarProps<T, M>, 'className'> & {
  ref?: Ref<HTMLDivElement>;
  variant?: CalendarVariant | `${CalendarVariant}`;
  className?: RacCalendarProps<T, M>['className'];
  defaultYearPickerOpen?: boolean;
  isYearPickerOpen?: boolean;
  onYearPickerOpenChange?: (isOpen: boolean) => void;
};
