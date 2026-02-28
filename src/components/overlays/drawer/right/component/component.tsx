import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerRightProps } from './component.interface';

export function DrawerRight({ ...rest }: DrawerRightProps) {
  return (
    <BaseUiDrawer.Root
      {...rest}
      swipeDirection={rest?.swipeDirection ?? 'right'}
    >
      {rest?.children}
    </BaseUiDrawer.Root>
  );
}
