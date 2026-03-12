import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { DrawerPortalViewportProps } from './component.interface';

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
