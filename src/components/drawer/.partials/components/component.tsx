import { DrawerProps } from '@/components/drawer/.partials/components/component.interface';
import {
  DRAWER_DEFAULT_DIRECTION,
  DRAWER_DIRECTION_TO_SWIPE,
} from '@/components/drawer/.partials/constants/component.constants';
import { DrawerProvider } from '@/components/drawer/.partials/providers/provider';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import React from 'react';

export function Drawer({
  isOpen,
  direction = DRAWER_DEFAULT_DIRECTION,
  keepMounted,
  container,
  children,
  ...rest
}: DrawerProps) {
  return (
    <DrawerProvider
      direction={direction}
      keepMounted={keepMounted}
      container={container}
    >
      <BaseUiDrawer.Root
        {...rest}
        open={isOpen}
        swipeDirection={DRAWER_DIRECTION_TO_SWIPE[direction]}
      >
        {children}
      </BaseUiDrawer.Root>
    </DrawerProvider>
  );
}
