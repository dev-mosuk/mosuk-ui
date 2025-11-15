import { Row } from '../../../../display/row/component';
import { RowProps } from '../../../../display/row/component/component.interface';
import { PaginationTableHeadColumnProps } from '../component/head/column/component.interface';
import { PaginationTableSkeletonBody } from './body/component';
import { PaginationTableSkeletonBodyProps } from './body/component.interface';
import { PaginationTableSkeleton as Component } from './component';
import { PaginationTableSkeletonProps } from './component.interface';
import { PaginationTableSkeletonHeadColumn } from './head/column/component';
import { PaginationTableSkeletonHead } from './head/component';
import { PaginationTableSkeletonHeadProps } from './head/component.interface';

export const PaginationTableSkeleton = Object.assign(Component, {
  Head: Object.assign(PaginationTableSkeletonHead, {
    Column: PaginationTableSkeletonHeadColumn,
  }),
  Body: Object.assign(PaginationTableSkeletonBody, {
    Row: Row,
  }),
});

export namespace PaginationTableSkeleton {
  export type Props = PaginationTableSkeletonProps;

  export namespace Head {
    export type Props = PaginationTableSkeletonHeadProps;

    export namespace Column {
      export type Props = PaginationTableHeadColumnProps;
    }
  }

  export namespace Body {
    export type Props = PaginationTableSkeletonBodyProps;

    export namespace Row {
      export type Props = RowProps;
    }
  }
}
