import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerLeftOpenProps } from './component.interface';

export function DrawerLeftOpen({ ...rest }: DrawerLeftOpenProps) {
  return (
    <BaseUiDrawer.Trigger {...rest}>{rest?.children}</BaseUiDrawer.Trigger>
  );
}
