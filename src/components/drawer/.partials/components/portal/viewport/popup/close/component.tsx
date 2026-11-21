import { DrawerPortalViewportPopupCloseProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/close/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerPortalViewportPopupClose({
  ...rest
}: DrawerPortalViewportPopupCloseProps) {
  return (
    <BaseUiDrawer.Close
      {...rest}
      className={classNames('mosuk-drawer-close', rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Close>
  );
}
