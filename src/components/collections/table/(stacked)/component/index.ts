import {
  TableStacked as BaseTableStacked,
  TableStackedRow as BaseTableStackedRow,
} from './component';
import type { TableStackedProps, TableStackedRowProps } from './component.interface';

export function TableStacked(props: TableStackedProps) {
  return BaseTableStacked(props);
}

TableStacked.Row = BaseTableStackedRow;

export namespace TableStacked {
  export type Props = TableStackedProps;

  export declare const Row: typeof BaseTableStackedRow;

  export namespace Row {
    export type Props = TableStackedRowProps;
  }
}
