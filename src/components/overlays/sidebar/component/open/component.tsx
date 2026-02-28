import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { SidebarOpenProps } from './component.interface';

export function SidebarOpen({ ...rest }: SidebarOpenProps) {
  return (
    <BaseUiDrawer.Trigger {...rest}>{rest?.children}</BaseUiDrawer.Trigger>
  );
}
