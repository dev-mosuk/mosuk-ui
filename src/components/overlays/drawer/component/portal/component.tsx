import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import { DrawerPortalProps } from './component.interface';

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
