import { DrawerTriggerProps } from '@/components/drawer/.partials/components/trigger/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerTrigger({ ...rest }: DrawerTriggerProps) {
  return (
    <BaseUiDrawer.Trigger
      {...rest}
      className={classNames('mosuk-drawer-trigger', rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Trigger>
  );
}
