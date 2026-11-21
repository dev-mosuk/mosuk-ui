'use client';

import { createContext, useContext } from 'react';

export interface CalendarYearPickerTriggerContextProps {
  isOpen: boolean;
  monthYear: string;
  toggle: () => void;
}

export const CalendarYearPickerTriggerContext =
  createContext<CalendarYearPickerTriggerContextProps | null>(null);

export function useCalendarYearPickerTrigger(): CalendarYearPickerTriggerContextProps {
  const context = useContext(CalendarYearPickerTriggerContext);

  if (!context) {
    throw new Error(
      'Calendar.YearPickerTriggerHeading must be used within Calendar.YearPickerTrigger',
    );
  }

  return context;
}
