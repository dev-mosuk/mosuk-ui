import type { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';
import { Drawer as BaseUiDrawer } from '@base-ui/react';

export type DrawerProps = Omit<
  BaseUiDrawer.Root.Props,
  'swipeDirection' | 'open'
> & {
  isOpen?: boolean;
  direction?: DrawerDirection | `${DrawerDirection}`;
  keepMounted?: boolean;
  container?: BaseUiDrawer.Portal.Props['container'];
};
