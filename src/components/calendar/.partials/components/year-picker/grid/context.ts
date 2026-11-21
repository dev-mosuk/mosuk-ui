'use client';

import { createContext, useContext } from 'react';

export interface CalendarYearPickerGridContextProps {
  isYearPickerOpen: boolean;
  activeYear: number;
  currentYear: number;
  focusedYear: number;
  years: number[];
  getFormattedYear: (year: number) => string;
  selectYear: (year: number) => void;
  setActiveYear: (year: number) => void;
}

export const CalendarYearPickerGridContext =
  createContext<CalendarYearPickerGridContextProps | null>(null);

export function useCalendarYearPickerGrid(): CalendarYearPickerGridContextProps {
  const context = useContext(CalendarYearPickerGridContext);

  if (!context) {
    throw new Error(
      'Calendar.YearPickerGridBody must be used within Calendar.YearPickerGrid',
    );
  }

  return context;
}
