import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerRightOpenProps } from './component.interface';

export function DrawerRightOpen({ ...rest }: DrawerRightOpenProps) {
  return (
    <BaseUiDrawer.Trigger {...rest}>{rest?.children}</BaseUiDrawer.Trigger>
  );
}
