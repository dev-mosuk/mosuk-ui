import styles from '@/components/overlays/drawer/component/component.module.css';
import { DrawerPortalViewportProps } from '@/components/overlays/drawer/component/portal/viewport/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerPortalViewport({ ...rest }: DrawerPortalViewportProps) {
  return (
    <BaseUiDrawer.Viewport
      {...rest}
      className={classNames(
        'mosuk-drawer-portal-viewport',
        styles.viewport,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiDrawer.Viewport>
  );
}
