import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerRightCloseProps } from './component.interface';

export function DrawerRightClose({ ...rest }: DrawerRightCloseProps) {
  return <BaseUiDrawer.Close {...rest}>{rest?.children}</BaseUiDrawer.Close>;
}
