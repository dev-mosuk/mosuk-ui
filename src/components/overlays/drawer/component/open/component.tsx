import { DrawerOpenProps } from '@/components/overlays/drawer/component/open/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerOpen({ ...rest }: DrawerOpenProps) {
  return (
    <BaseUiDrawer.Trigger
      {...rest}
      className={classNames('mosuk-drawer-open', rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Trigger>
  );
}
