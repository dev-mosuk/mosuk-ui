import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerLeftPortalProps } from './component.interface';

export function DrawerLeftPortal({ ...rest }: DrawerLeftPortalProps) {
  return <BaseUiDrawer.Portal {...rest}>{rest?.children}</BaseUiDrawer.Portal>;
}
