import type {
  CalendarSelectionMode,
  CalendarState,
} from 'react-stately/useCalendarState';

import type {
  CalendarDayViewContextProps,
  CalendarYearPickerContextProps,
} from '@/components/actions/calendar/.partials/providers/context/context.interface';

export type UseCalendarStateProps = CalendarState<CalendarSelectionMode>;

export type UseCalendarYearPickerStateProps = CalendarYearPickerContextProps;

export type UseCalendarDayViewProps = CalendarDayViewContextProps;

export interface UseYearPickerOpenProps {
  isOpen: boolean | undefined;
  defaultOpen: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}
