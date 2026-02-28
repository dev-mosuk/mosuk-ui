import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerBottomPortalProps } from './component.interface';

export function DrawerBottomPortal({ ...rest }: DrawerBottomPortalProps) {
  return <BaseUiDrawer.Portal {...rest}>{rest?.children}</BaseUiDrawer.Portal>;
}
