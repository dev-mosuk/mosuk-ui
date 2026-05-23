import { BreadcrumbsButtonSkeleton } from '@/components/collections/breadcrumbs/skeleton/.partials/components/button/component';
import { BreadcrumbsButtonSkeletonProps } from '@/components/collections/breadcrumbs/skeleton/.partials/components/button/component.interface';
import { BreadcrumbsSkeleton as BaseBreadcrumbsSkeleton } from '@/components/collections/breadcrumbs/skeleton/.partials/components/component';
import type { BreadcrumbsSkeletonProps } from '@/components/collections/breadcrumbs/skeleton/.partials/components/component.interface';
import { BreadcrumbsIconSkeleton } from '@/components/collections/breadcrumbs/skeleton/.partials/components/icon/component';
import { BreadcrumbsIconSkeletonProps } from '@/components/collections/breadcrumbs/skeleton/.partials/components/icon/component.interface';

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
