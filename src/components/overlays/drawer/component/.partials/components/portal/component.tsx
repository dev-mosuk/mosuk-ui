import { DrawerPortalProps } from '@/components/overlays/drawer/component/.partials/components/portal/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerPortal({ ...rest }: DrawerPortalProps) {
  return (
    <BaseUiDrawer.Portal
      {...rest}
      className={classNames('mosuk-drawer-portal', rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Portal>
  );
}
