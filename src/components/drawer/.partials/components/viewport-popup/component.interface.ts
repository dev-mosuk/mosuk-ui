import type { DrawerVariant } from '@/components/drawer/.partials/enums/component.enums';
import { Drawer as BaseUiDrawer } from '@base-ui/react';

export type DrawerViewportPopupProps = Omit<
  BaseUiDrawer.Popup.Props,
  'color'
> & {
  variant?: DrawerVariant | `${DrawerVariant}`;
};
