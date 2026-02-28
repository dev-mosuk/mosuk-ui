import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerProps } from './component.interface';

export function Drawer({ ...rest }: DrawerProps) {
  return <BaseUiDrawer.Root {...rest}>{rest?.children}</BaseUiDrawer.Root>;
}
