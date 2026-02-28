import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerBottomOpenProps } from './component.interface';

export function DrawerBottomOpen({ ...rest }: DrawerBottomOpenProps) {
  return (
    <BaseUiDrawer.Trigger {...rest}>{rest?.children}</BaseUiDrawer.Trigger>
  );
}
