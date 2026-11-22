import type { ReactNode } from 'react';

import type { CalendarYearPickerCellRenderProps } from '@/components/calendar/.partials/components/year-picker-cell/component.interface';

export interface CalendarYearPickerGridBodyProps {
  children?: (values: CalendarYearPickerCellRenderProps) => ReactNode;
}
