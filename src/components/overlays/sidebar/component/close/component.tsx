import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { SidebarCloseProps } from './component.interface';

export function SidebarClose({ ...rest }: SidebarCloseProps) {
  return <BaseUiDrawer.Close {...rest}>{rest?.children}</BaseUiDrawer.Close>;
}
