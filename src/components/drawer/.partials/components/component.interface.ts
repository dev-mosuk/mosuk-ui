import type { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';
import { Drawer as BaseUiDrawer } from '@base-ui/react';

export interface DrawerProps
  extends Omit<BaseUiDrawer.Root.Props, 'swipeDirection'> {
  direction?: DrawerDirection | `${DrawerDirection}`;
  keepMounted?: boolean;
  container?: BaseUiDrawer.Portal.Props['container'];
}
