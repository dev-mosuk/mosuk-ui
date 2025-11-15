import { BreadcrumbsButtonSkeleton } from './button/component';
import { BreadcrumbsButtonSkeletonProps } from './button/component.interface';
import { BreadcrumbsSkeleton as BaseBreadcrumbsSkeleton } from './component';
import type { BreadcrumbsSkeletonProps } from './component.interface';
import { BreadcrumbsIconSkeleton } from './icon/component';
import { BreadcrumbsIconSkeletonProps } from './icon/component.interface';

export const BreadcrumbsSkeleton = Object.assign(BaseBreadcrumbsSkeleton, {
  Icon: BreadcrumbsIconSkeleton,
  Button: BreadcrumbsButtonSkeleton,
});

export namespace BreadcrumbsSkeleton {
  export type Props = BreadcrumbsSkeletonProps;

  export namespace Icon {
    export type Props = BreadcrumbsIconSkeletonProps;
  }

  export namespace Button {
    export type Props = BreadcrumbsButtonSkeletonProps;
  }
}
