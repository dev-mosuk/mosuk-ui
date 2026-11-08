import styles from '@/components/overlays/drawer/component/.partials/styles/component.module.css';
import { DrawerPortalViewportBackdropProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/backdrop/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerPortalViewportBackdrop({
  ...rest
}: DrawerPortalViewportBackdropProps) {
  return (
    <BaseUiDrawer.Backdrop
      {...rest}
      className={classNames(
        'mosuk-drawer-portal-viewport-backdrop',
        styles.backdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiDrawer.Backdrop>
  );
}
