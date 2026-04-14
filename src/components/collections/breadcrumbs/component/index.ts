import { BreadcrumbsButton } from './.partials/components/button/component';
import { BreadcrumbsButtonProps } from './.partials/components/button/component.interface';
import { Breadcrumbs as BaseBreadcrumbs } from './.partials/components/component';
import type { BreadcrumbsProps } from './.partials/components/component.interface';
import { BreadcrumbsIcon } from './.partials/components/icon/component';
import { BreadcrumbsIconProps } from './.partials/components/icon/component.interface';

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
