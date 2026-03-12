import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import { DrawerCloseProps } from './component.interface';

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
