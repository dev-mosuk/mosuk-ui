import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerBottomCloseProps } from './component.interface';

export function DrawerBottomClose({ ...rest }: DrawerBottomCloseProps) {
  return <BaseUiDrawer.Close {...rest}>{rest?.children}</BaseUiDrawer.Close>;
}
