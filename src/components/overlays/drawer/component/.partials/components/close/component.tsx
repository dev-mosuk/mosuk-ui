import { DrawerCloseProps } from '@/components/overlays/drawer/component/.partials/components/close/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerClose({ ...rest }: DrawerCloseProps) {
  return (
    <BaseUiDrawer.Close
      {...rest}
      className={classNames('mosuk-drawer-close', rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Close>
  );
}
