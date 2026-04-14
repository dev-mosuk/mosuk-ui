import { BreadcrumbsButtonSkeleton } from './.partials/components/button/component';
import { BreadcrumbsButtonSkeletonProps } from './.partials/components/button/component.interface';
import { BreadcrumbsSkeleton as BaseBreadcrumbsSkeleton } from './.partials/components/component';
import type { BreadcrumbsSkeletonProps } from './.partials/components/component.interface';
import { BreadcrumbsIconSkeleton } from './.partials/components/icon/component';
import { BreadcrumbsIconSkeletonProps } from './.partials/components/icon/component.interface';

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
