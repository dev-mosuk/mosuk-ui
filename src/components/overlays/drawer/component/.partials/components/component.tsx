import { DrawerProps } from '@/components/overlays/drawer/component/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import React from 'react';

export function Drawer({ ...rest }: DrawerProps) {
  return <BaseUiDrawer.Root {...rest}>{rest?.children}</BaseUiDrawer.Root>;
}
