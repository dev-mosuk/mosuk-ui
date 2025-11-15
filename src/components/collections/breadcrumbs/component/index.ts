import { BreadcrumbsButton } from './button/component';
import { BreadcrumbsButtonProps } from './button/component.interface';
import { Breadcrumbs as BaseBreadcrumbs } from './component';
import type { BreadcrumbsProps } from './component.interface';
import { BreadcrumbsIcon } from './icon/component';
import { BreadcrumbsIconProps } from './icon/component.interface';

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
