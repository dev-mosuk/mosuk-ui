import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { DrawerPortalProps } from './component.interface';

export function DrawerPortal({ ...rest }: DrawerPortalProps) {
  return <BaseUiDrawer.Portal {...rest}>{rest?.children}</BaseUiDrawer.Portal>;
}
