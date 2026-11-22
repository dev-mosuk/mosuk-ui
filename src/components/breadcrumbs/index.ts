import { BreadcrumbsButton } from '@/components/breadcrumbs/.partials/components/button/component';
import { BreadcrumbsButtonProps } from '@/components/breadcrumbs/.partials/components/button/component.interface';
import { Breadcrumbs as BaseBreadcrumbs } from '@/components/breadcrumbs/.partials/components/component';
import type { BreadcrumbsProps } from '@/components/breadcrumbs/.partials/components/component.interface';
import { BreadcrumbsIcon } from '@/components/breadcrumbs/.partials/components/icon/component';
import { BreadcrumbsIconProps } from '@/components/breadcrumbs/.partials/components/icon/component.interface';

export const Breadcrumbs = Object.assign(BaseBreadcrumbs, {
  Icon: BreadcrumbsIcon,
  Button: BreadcrumbsButton,
});

export namespace Breadcrumbs {
  export type Props = BreadcrumbsProps;

  export namespace Icon {
    export type Props<C = 'span'> = BreadcrumbsIconProps<C>;
  }

  export namespace Button {
    export type Props<C = 'span'> = BreadcrumbsButtonProps<C>;
  }
}
