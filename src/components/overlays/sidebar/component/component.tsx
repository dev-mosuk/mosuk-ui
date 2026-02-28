import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { SidebarProps } from './component.interface';

export function Sidebar({ ...rest }: SidebarProps) {
  return (
    <BaseUiDrawer.Root
      {...rest}
      swipeDirection={rest?.swipeDirection ?? 'right'}
    >
      {rest?.children}
    </BaseUiDrawer.Root>
  );
}
