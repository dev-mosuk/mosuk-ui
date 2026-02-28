import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerLeftProps } from './component.interface';

export function DrawerLeft({ ...rest }: DrawerLeftProps) {
  return (
    <BaseUiDrawer.Root
      {...rest}
      swipeDirection={rest?.swipeDirection ?? 'left'}
    >
      {rest?.children}
    </BaseUiDrawer.Root>
  );
}
