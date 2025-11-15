import { PaginationTableBody } from './body/component';
import { PaginationTableBodyProps } from './body/component.interface';
import { PaginationTableBodyRow } from './body/row/component';
import { PaginationTableBodyRowProps } from './body/row/component.interface';
import { PaginationTable as Component } from './component';
import { PaginationTableProps } from './component.interface';
import { PaginationTableHeadColumn } from './head/column/component';
import { PaginationTableHeadColumnProps } from './head/column/component.interface';
import { PaginationTableHead } from './head/component';
import { PaginationTableHeadProps } from './head/component.interface';

export const PaginationTable = Object.assign(Component, {
  Head: Object.assign(PaginationTableHead, {
    Column: PaginationTableHeadColumn,
  }),
  Body: Object.assign(PaginationTableBody, {
    Row: PaginationTableBodyRow,
  }),
});

export namespace PaginationTable {
  export type Props = PaginationTableProps;

  export namespace Head {
    export type Props = PaginationTableHeadProps;

    export namespace Column {
      export type Props = PaginationTableHeadColumnProps;
    }
  }

  export namespace Body {
    export type Props = PaginationTableBodyProps;

    export namespace Row {
      export type Props = PaginationTableBodyRowProps;
    }
  }
}
