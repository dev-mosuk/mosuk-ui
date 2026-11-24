import type { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';
import { Drawer as BaseUiDrawer } from '@base-ui/react';

type DrawerOwnProps = {
  direction?: DrawerDirection | `${DrawerDirection}`;
  keepMounted?: boolean;
  container?: BaseUiDrawer.Portal.Props['container'];
  isOpen?: boolean;
  defaultOpen?: boolean;
  /** @deprecated Use `isOpen` */
  open?: never;
};

export type DrawerProps = DrawerOwnProps &
  Omit<
    BaseUiDrawer.Root.Props,
    'open' | 'defaultOpen' | 'disabled' | 'swipeDirection'
  >;