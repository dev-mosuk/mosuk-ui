import { CalendarCell } from '@/components/actions/calendar/.partials/components/cell/component';
import type { CalendarCellProps } from '@/components/actions/calendar/.partials/components/cell/component.interface';
import { Calendar as Component } from '@/components/actions/calendar/.partials/components/component';
import type { CalendarProps } from '@/components/actions/calendar/.partials/components/component.interface';
import { CalendarGridBody } from '@/components/actions/calendar/.partials/components/grid-body/component';
import type { CalendarGridBodyProps } from '@/components/actions/calendar/.partials/components/grid-body/component.interface';
import { CalendarGridHeader } from '@/components/actions/calendar/.partials/components/grid-header/component';
import type { CalendarGridHeaderProps } from '@/components/actions/calendar/.partials/components/grid-header/component.interface';
import { CalendarGrid } from '@/components/actions/calendar/.partials/components/grid/component';
import type { CalendarGridProps } from '@/components/actions/calendar/.partials/components/grid/component.interface';
import { CalendarHeaderCell } from '@/components/actions/calendar/.partials/components/header-cell/component';
import type { CalendarHeaderCellProps } from '@/components/actions/calendar/.partials/components/header-cell/component.interface';
import { CalendarHeader } from '@/components/actions/calendar/.partials/components/header/component';
import type { CalendarHeaderProps } from '@/components/actions/calendar/.partials/components/header/component.interface';
import { CalendarHeading } from '@/components/actions/calendar/.partials/components/heading/component';
import type { CalendarHeadingProps } from '@/components/actions/calendar/.partials/components/heading/component.interface';
import { CalendarCellIndicator } from '@/components/actions/calendar/.partials/components/indicator/component';
import type { CalendarCellIndicatorProps } from '@/components/actions/calendar/.partials/components/indicator/component.interface';
import { CalendarNavButton } from '@/components/actions/calendar/.partials/components/nav-button/component';
import type { CalendarNavButtonProps } from '@/components/actions/calendar/.partials/components/nav-button/component.interface';
import { CalendarYearPickerGridBody } from '@/components/actions/calendar/.partials/components/year-picker/body/component';
import type { CalendarYearPickerGridBodyProps } from '@/components/actions/calendar/.partials/components/year-picker/body/component.interface';
import { CalendarYearPickerCell } from '@/components/actions/calendar/.partials/components/year-picker/cell/component';
import type { CalendarYearPickerCellProps } from '@/components/actions/calendar/.partials/components/year-picker/cell/component.interface';
import { CalendarYearPickerGrid } from '@/components/actions/calendar/.partials/components/year-picker/grid/component';
import type { CalendarYearPickerGridProps } from '@/components/actions/calendar/.partials/components/year-picker/grid/component.interface';
import { CalendarYearPickerTriggerHeading } from '@/components/actions/calendar/.partials/components/year-picker/heading/component';
import type { CalendarYearPickerTriggerHeadingProps } from '@/components/actions/calendar/.partials/components/year-picker/heading/component.interface';
import { CalendarYearPickerTriggerIndicator } from '@/components/actions/calendar/.partials/components/year-picker/indicator/component';
import type { CalendarYearPickerTriggerIndicatorProps } from '@/components/actions/calendar/.partials/components/year-picker/indicator/component.interface';
import { CalendarYearPickerTrigger } from '@/components/actions/calendar/.partials/components/year-picker/trigger/component';
import type { CalendarYearPickerTriggerProps } from '@/components/actions/calendar/.partials/components/year-picker/trigger/component.interface';
import type { DateValue } from '@internationalized/date';
import type { CalendarSelectionMode } from 'react-aria-components/Calendar';

export const Calendar = Object.assign(Component, {
  Header: CalendarHeader,
  Heading: CalendarHeading,
  NavButton: CalendarNavButton,
  Grid: CalendarGrid,
  GridHeader: CalendarGridHeader,
  GridBody: CalendarGridBody,
  HeaderCell: CalendarHeaderCell,
  Cell: CalendarCell,
  CellIndicator: CalendarCellIndicator,
  YearPickerTrigger: CalendarYearPickerTrigger,
  YearPickerTriggerHeading: CalendarYearPickerTriggerHeading,
  YearPickerTriggerIndicator: CalendarYearPickerTriggerIndicator,
  YearPickerGrid: CalendarYearPickerGrid,
  YearPickerGridBody: CalendarYearPickerGridBody,
  YearPickerCell: CalendarYearPickerCell,
});

export namespace Calendar {
  export type Props<
    T extends DateValue = DateValue,
    M extends CalendarSelectionMode = 'single',
  > = CalendarProps<T, M>;

  export namespace Header {
    export type Props = CalendarHeaderProps;
  }

  export namespace Heading {
    export type Props = CalendarHeadingProps;
  }

  export namespace NavButton {
    export type Props = CalendarNavButtonProps;
  }

  export namespace Grid {
    export type Props = CalendarGridProps;
  }

  export namespace GridHeader {
    export type Props = CalendarGridHeaderProps;
  }

  export namespace GridBody {
    export type Props = CalendarGridBodyProps;
  }

  export namespace HeaderCell {
    export type Props = CalendarHeaderCellProps;
  }

  export namespace Cell {
    export type Props = CalendarCellProps;
  }

  export namespace CellIndicator {
    export type Props = CalendarCellIndicatorProps;
  }

  export namespace YearPickerTrigger {
    export type Props = CalendarYearPickerTriggerProps;
  }

  export namespace YearPickerTriggerHeading {
    export type Props = CalendarYearPickerTriggerHeadingProps;
  }

  export namespace YearPickerTriggerIndicator {
    export type Props = CalendarYearPickerTriggerIndicatorProps;
  }

  export namespace YearPickerGrid {
    export type Props = CalendarYearPickerGridProps;
  }

  export namespace YearPickerGridBody {
    export type Props = CalendarYearPickerGridBodyProps;
  }

  export namespace YearPickerCell {
    export type Props = CalendarYearPickerCellProps;
  }
}
