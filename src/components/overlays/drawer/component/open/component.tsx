import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerOpenProps } from './component.interface';

export function DrawerOpen({ ...rest }: DrawerOpenProps) {
  return (
    <BaseUiDrawer.Trigger {...rest}>{rest?.children}</BaseUiDrawer.Trigger>
  );
}
