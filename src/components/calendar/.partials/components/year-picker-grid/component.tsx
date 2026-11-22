'use client';

import classNames from 'classnames';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { useCalendarYearPicker } from 'react-aria/useCalendar';

import type { CalendarYearPickerGridProps } from '@/components/calendar/.partials/components/year-picker-grid/component.interface';
import { CalendarYearPickerGridContext } from '@/components/calendar/.partials/components/year-picker-grid/context';
import {
  useCalendarState,
  useCalendarYearPickerState,
} from '@/components/calendar/.partials/hooks/hook';
import styles from '@/components/calendar/.partials/styles/component.module.css';
import { getYearRange } from '@/components/calendar/.partials/utilities/util';

export function CalendarYearPickerGrid({
  children,
  className,
  format,
  onKeyDown,
  visibleYears: visibleYearsProp,
  ...rest
}: CalendarYearPickerGridProps) {
  const { calendarRef, isYearPickerOpen, setIsYearPickerOpen } =
    useCalendarYearPickerState();
  const state = useCalendarState();
  const gridRef = useRef<HTMLDivElement>(null);
  const visibleYears = useMemo(() => {
    if (visibleYearsProp != null) {
      return visibleYearsProp;
    }

    if (!state.minValue || !state.maxValue) {
      return 20;
    }

    return getYearRange(state.minValue, state.maxValue).length;
  }, [state.maxValue, state.minValue, visibleYearsProp]);
  const {
    'aria-label': yearGridAriaLabel,
    items,
    onChange,
    value: focusedItemId,
  } = useCalendarYearPicker({ format, visibleYears }, state);
  const itemsKey = items
    .map((item) => `${item.id}:${item.date.year}`)
    .join('|');
  const labelsKey = items.map((item) => item.formatted).join('|');
  const years = useMemo(() => items.map((item) => item.date.year), [itemsKey]);
  const itemByYear = useMemo(
    () => new Map(items.map((item) => [item.date.year, item])),
    [itemsKey, labelsKey],
  );
  const focusedYear =
    items.find((item) => String(item.id) === String(focusedItemId))?.date
      .year ?? state.focusedDate.year;
  const [activeYear, setActiveYear] = useState(focusedYear);
  const wasYearPickerOpenRef = useRef(false);

  const firstVisibleYear = years[0];

  if (
    isYearPickerOpen &&
    firstVisibleYear != null &&
    !years.includes(activeYear)
  ) {
    setActiveYear(firstVisibleYear);
  }

  const getFormattedYear = useCallback(
    (year: number) => itemByYear.get(year)?.formatted ?? String(year),
    [itemByYear],
  );
  const focusYearCell = useCallback((year: number) => {
    const yearCell = gridRef.current?.querySelector<HTMLElement>(
      `[data-year='${year}']`,
    );

    yearCell?.focus();
  }, []);

  useEffect(() => {
    const yearGrid = gridRef.current;

    if (!yearGrid) {
      return;
    }

    const calendarGrid = calendarRef.current?.querySelector(
      '[data-slot="calendar-grid"]',
    );

    if (calendarGrid instanceof HTMLElement) {
      yearGrid.style.top = `${calendarGrid.offsetTop}px`;
      yearGrid.style.height = `${calendarGrid.offsetHeight}px`;
    }
  }, [calendarRef, isYearPickerOpen, state.focusedDate]);

  useEffect(() => {
    const justOpened = isYearPickerOpen && !wasYearPickerOpenRef.current;

    wasYearPickerOpenRef.current = isYearPickerOpen;

    if (!justOpened || years.length === 0) {
      return;
    }

    const firstYear = years[0];

    if (firstYear == null) {
      return;
    }

    const nextActiveYear = years.includes(focusedYear)
      ? focusedYear
      : firstYear;
    const frame = requestAnimationFrame(() => {
      setActiveYear(nextActiveYear);
      focusYearCell(nextActiveYear);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [focusYearCell, focusedYear, isYearPickerOpen, itemsKey, years]);

  const selectYear = useCallback(
    (year: number) => {
      const item = itemByYear.get(year);

      if (item == null) {
        return;
      }

      setIsYearPickerOpen(false);
      onChange(item.id);
    },
    [itemByYear, onChange, setIsYearPickerOpen],
  );

  const currentYear = new Date().getFullYear();
  const contextValue = useMemo(
    () => ({
      activeYear,
      currentYear,
      focusedYear,
      getFormattedYear,
      isYearPickerOpen,
      selectYear,
      setActiveYear,
      years,
    }),
    [
      activeYear,
      currentYear,
      focusedYear,
      getFormattedYear,
      isYearPickerOpen,
      selectYear,
      years,
    ],
  );

  return (
    <CalendarYearPickerGridContext.Provider value={contextValue}>
      <div
        {...rest}
        ref={gridRef}
        aria-hidden={!isYearPickerOpen}
        aria-label={yearGridAriaLabel}
        className={classNames(
          'mosuk-calendar-year-picker-grid',
          styles.yearGrid,
          className,
        )}
        data-open={isYearPickerOpen || undefined}
        role='listbox'
        tabIndex={-1}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (event.key === 'Escape' && isYearPickerOpen) {
            event.preventDefault();
            setIsYearPickerOpen(false);

            return;
          }

          if (!isYearPickerOpen || years.length === 0) {
            return;
          }

          const currentIndex = years.indexOf(activeYear);

          if (currentIndex === -1) {
            return;
          }

          let nextIndex = currentIndex;

          switch (event.key) {
            case 'ArrowRight':
              nextIndex = Math.min(currentIndex + 1, years.length - 1);
              break;
            case 'ArrowLeft':
              nextIndex = Math.max(currentIndex - 1, 0);
              break;
            case 'ArrowDown':
              nextIndex = Math.min(currentIndex + 3, years.length - 1);
              break;
            case 'ArrowUp':
              nextIndex = Math.max(currentIndex - 3, 0);
              break;
            case 'Home':
              nextIndex = 0;
              break;
            case 'End':
              nextIndex = years.length - 1;
              break;
            default:
              return;
          }

          if (nextIndex === currentIndex) {
            return;
          }

          const nextYear = years[nextIndex];

          if (nextYear == null) {
            return;
          }

          event.preventDefault();
          setActiveYear(nextYear);
          focusYearCell(nextYear);
        }}
      >
        {children}
      </div>
    </CalendarYearPickerGridContext.Provider>
  );
}
