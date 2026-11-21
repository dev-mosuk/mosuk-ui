import { createContext } from 'react';

import type {
  CalendarDayViewContextProps,
  CalendarYearPickerContextProps,
} from '@/components/calendar/.partials/providers/context/context.interface';

export const CalendarYearPickerContext =
  createContext<CalendarYearPickerContextProps | null>(null);

export const CalendarDayViewContext =
  createContext<CalendarDayViewContextProps | null>(null);
