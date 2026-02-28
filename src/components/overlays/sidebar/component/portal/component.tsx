import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import React from 'react';
import { SidebarPortalProps } from './component.interface';

export function SidebarPortal({ ...rest }: SidebarPortalProps) {
  return <BaseUiDrawer.Portal {...rest}>{rest?.children}</BaseUiDrawer.Portal>;
}
