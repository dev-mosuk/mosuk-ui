import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerCloseProps } from './component.interface';

export function DrawerClose({ ...rest }: DrawerCloseProps) {
  return <BaseUiDrawer.Close {...rest}>{rest?.children}</BaseUiDrawer.Close>;
}
