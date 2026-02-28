import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerLeftCloseProps } from './component.interface';

export function DrawerLeftClose({ ...rest }: DrawerLeftCloseProps) {
  return <BaseUiDrawer.Close {...rest}>{rest?.children}</BaseUiDrawer.Close>;
}
