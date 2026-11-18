'use client';

import { useCallback, useContext, useState } from 'react';
import { CalendarStateContext } from 'react-aria-components/Calendar';

import type {
  UseCalendarDayViewProps,
  UseCalendarStateProps,
  UseCalendarYearPickerStateProps,
  UseYearPickerOpenProps,
} from '@/components/actions/calendar/.partials/hooks/hook.interface';
import {
  CalendarDayViewContext,
  CalendarYearPickerContext,
} from '@/components/actions/calendar/.partials/providers/context/context';

export function useCalendarState(): UseCalendarStateProps {
  const state = useContext(CalendarStateContext);

  if (!state) {
    throw new Error('useCalendarState must be used within Calendar');
  }

  return state;
}

export function useCalendarYearPickerState(): UseCalendarYearPickerStateProps {
  const context = useContext(CalendarYearPickerContext);

  if (!context) {
    throw new Error('useCalendarYearPickerState must be used within Calendar');
  }

  return context;
}

export function useCalendarDayView(): UseCalendarDayViewProps | null {
  return useContext(CalendarDayViewContext);
}

export function useYearPickerOpen({
  isOpen: isOpenProp,
  defaultOpen,
  onOpenChange,
}: UseYearPickerOpenProps): [boolean, (isOpen: boolean) => void] {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : uncontrolledOpen;
  const setIsOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  return [isOpen, setIsOpen];
}
