import { DrawerProps } from '@/components/drawer/.partials/components/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import React from 'react';

export function Drawer({ ...rest }: DrawerProps) {
  return <BaseUiDrawer.Root {...rest}>{rest?.children}</BaseUiDrawer.Root>;
}
