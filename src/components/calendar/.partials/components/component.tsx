'use client';

import {
  CalendarDate,
  createCalendar,
  DateFormatter,
  type CalendarIdentifier,
  type DateValue,
} from '@internationalized/date';
import React, { useMemo, useRef, type Ref } from 'react';
import {
  Calendar as CalendarPrimitive,
  type CalendarSelectionMode,
} from 'react-aria-components/Calendar';
import { useLocale } from 'react-aria-components/I18nProvider';

import type { CalendarProps } from '@/components/calendar/.partials/components/component.interface';
import {
  CALENDAR_DEFAULT_VARIANT,
  CALENDAR_DEFAULT_YEAR_PICKER_OPEN,
} from '@/components/calendar/.partials/constants/component.constants';
import { useYearPickerOpen } from '@/components/calendar/.partials/hooks/hook';
import {
  CalendarDayViewProvider,
  CalendarYearPickerProvider,
} from '@/components/calendar/.partials/providers/provider';
import styles from '@/components/calendar/.partials/styles/component.module.css';
import {
  calendarClassName,
  getGregorianYearOffset,
} from '@/components/calendar/.partials/utilities/util';

function setRef<Node>(ref: Ref<Node> | undefined, value: Node | null) {
  if (!ref) {
    return;
  }

  if (typeof ref === 'function') {
    ref(value);

    return;
  }

  (ref as { current: Node | null }).current = value;
}

export function Calendar<
  T extends DateValue = DateValue,
  M extends CalendarSelectionMode = 'single',
>({
  ref,
  children,
  className,
  variant = CALENDAR_DEFAULT_VARIANT,
  defaultYearPickerOpen = CALENDAR_DEFAULT_YEAR_PICKER_OPEN,
  firstDayOfWeek,
  isYearPickerOpen: isYearPickerOpenProp,
  maxValue: maxValueProp,
  minValue: minValueProp,
  onYearPickerOpenChange,
  visibleDuration,
  ...rest
}: CalendarProps<T, M>) {
  const isWeekView = visibleDuration?.weeks != null;
  const isDayView = visibleDuration?.days != null;
  const visibleDays = visibleDuration?.days;
  const { locale } = useLocale();
  const calendarRef = useRef<HTMLDivElement>(null);
  const [isYearPickerOpen, setIsYearPickerOpen] = useYearPickerOpen({
    isOpen: isYearPickerOpenProp,
    defaultOpen: defaultYearPickerOpen,
    onOpenChange: onYearPickerOpenChange,
  });
  const calendar = useMemo(() => {
    const identifier = new DateFormatter(locale).resolvedOptions()
      .calendar as CalendarIdentifier;

    return createCalendar(identifier);
  }, [locale]);
  const gregorianYearOffset = useMemo(
    () => getGregorianYearOffset(calendar.identifier),
    [calendar],
  );
  const minValue = useMemo(
    () =>
      minValueProp ??
      (new CalendarDate(
        calendar,
        1900 + gregorianYearOffset,
        1,
        1,
      ) as unknown as T),
    [minValueProp, calendar, gregorianYearOffset],
  );
  const maxValue = useMemo(
    () =>
      maxValueProp ??
      (new CalendarDate(
        calendar,
        2099 + gregorianYearOffset,
        12,
        31,
      ) as unknown as T),
    [maxValueProp, calendar, gregorianYearOffset],
  );
  const dayViewBase = useMemo(
    () =>
      isDayView && visibleDays != null
        ? { days: visibleDays, firstDayOfWeek }
        : undefined,
    [isDayView, visibleDays, firstDayOfWeek],
  );

  return (
    <CalendarYearPickerProvider
      calendarRef={calendarRef}
      isYearPickerOpen={isYearPickerOpen}
      setIsYearPickerOpen={setIsYearPickerOpen}
    >
      <CalendarPrimitive
        {...rest}
        ref={(node) => {
          calendarRef.current = node;

          setRef(ref, node);
        }}
        className={calendarClassName(
          className,
          'mosuk-calendar',
          '@container/calendar',
          'group/calendar',
          styles.calendar,
        )}
        data-variant={variant}
        data-day-view={isDayView || undefined}
        data-week-view={isWeekView || undefined}
        firstDayOfWeek={firstDayOfWeek}
        maxValue={maxValue}
        minValue={minValue}
        visibleDuration={visibleDuration}
      >
        {(values) => (
          <CalendarDayViewProvider
            dayViewBase={dayViewBase}
            timeZone={values.state.timeZone}
            visibleRange={values.state.visibleRange}
          >
            {typeof children === 'function' ? children(values) : children}
          </CalendarDayViewProvider>
        )}
      </CalendarPrimitive>
    </CalendarYearPickerProvider>
  );
}
