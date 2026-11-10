import { BreadcrumbsButton } from '@/components/navigation/breadcrumbs/.partials/components/button/component';
import { BreadcrumbsButtonProps } from '@/components/navigation/breadcrumbs/.partials/components/button/component.interface';
import { Breadcrumbs as BaseBreadcrumbs } from '@/components/navigation/breadcrumbs/.partials/components/component';
import type { BreadcrumbsProps } from '@/components/navigation/breadcrumbs/.partials/components/component.interface';
import { BreadcrumbsIcon } from '@/components/navigation/breadcrumbs/.partials/components/icon/component';
import { BreadcrumbsIconProps } from '@/components/navigation/breadcrumbs/.partials/components/icon/component.interface';

export const Breadcrumbs = Object.assign(BaseBreadcrumbs, {
  Icon: BreadcrumbsIcon,
  Button: BreadcrumbsButton,
});

export namespace Breadcrumbs {
  export type Props = BreadcrumbsProps;

  export namespace Icon {
    export type Props = BreadcrumbsIconProps;
  }

  export namespace Button {
    export type Props = BreadcrumbsButtonProps;
  }
}

import { BreadcrumbsButtonSkeleton } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/button/component';
import { BreadcrumbsButtonSkeletonProps } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/button/component.interface';
import { BreadcrumbsSkeleton as BaseBreadcrumbsSkeleton } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/component';
import type { BreadcrumbsSkeletonProps } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/component.interface';
import { BreadcrumbsIconSkeleton } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/icon/component';
import { BreadcrumbsIconSkeletonProps } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/icon/component.interface';

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
