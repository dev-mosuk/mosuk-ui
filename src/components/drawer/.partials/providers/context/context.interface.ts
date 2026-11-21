import type { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';
import type { Drawer as BaseUiDrawer } from '@base-ui/react';

export interface DrawerContextProps {
  direction: DrawerDirection | `${DrawerDirection}`;
  keepMounted?: boolean;
  container?: BaseUiDrawer.Portal.Props['container'];
}
