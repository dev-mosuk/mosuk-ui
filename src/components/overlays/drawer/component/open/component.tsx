import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import { DrawerOpenProps } from './component.interface';

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
