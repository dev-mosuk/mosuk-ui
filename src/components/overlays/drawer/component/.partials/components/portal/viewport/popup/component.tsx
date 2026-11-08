import styles from '@/components/overlays/drawer/component/component.module.css';
import { DrawerPortalViewportPopupProps } from '@/components/overlays/drawer/component/portal/viewport/popup/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerPortalViewportPopup({
  ...rest
}: DrawerPortalViewportPopupProps) {
  return (
    <BaseUiDrawer.Popup
      {...rest}
      className={classNames(
        'mosuk-drawer-portal-viewport-popup',
        styles.popup,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiDrawer.Popup>
  );
}
