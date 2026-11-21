import type { ReactNode } from 'react';
import type { ButtonProps } from 'react-aria-components/Button';

export interface CalendarYearPickerCellRenderProps {
  year: number;
  formattedYear: string;
  isSelected: boolean;
  isCurrentYear: boolean;
  isOpen: boolean;
  selectYear: () => void;
}

export interface CalendarYearPickerCellProps extends Omit<
  ButtonProps,
  'children'
> {
  year: number;
  children?:
    | ReactNode
    | ((values: CalendarYearPickerCellRenderProps) => ReactNode);
}
