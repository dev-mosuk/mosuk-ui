import { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';
import type { Drawer as BaseUiDrawer } from '@base-ui/react';

type DrawerSwipeDirection = NonNullable<
  BaseUiDrawer.Root.Props['swipeDirection']
>;

export const DRAWER_DEFAULT_DIRECTION = DrawerDirection.Bottom;

export const DRAWER_DIRECTION_TO_SWIPE: Record<
  DrawerDirection,
  DrawerSwipeDirection
> = {
  [DrawerDirection.Top]: 'up',
  [DrawerDirection.Bottom]: 'down',
  [DrawerDirection.Left]: 'left',
  [DrawerDirection.Right]: 'right',
  [DrawerDirection.Center]: 'down',
};
