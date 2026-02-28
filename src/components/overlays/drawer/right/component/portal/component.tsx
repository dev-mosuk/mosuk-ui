import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerRightPortalProps } from './component.interface';

export function DrawerRightPortal({ ...rest }: DrawerRightPortalProps) {
  return <BaseUiDrawer.Portal {...rest}>{rest?.children}</BaseUiDrawer.Portal>;
}
