import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { SidebarPortalViewportBackdropProps } from './component.interface';

export function SidebarPortalViewportBackdrop({
  ...rest
}: SidebarPortalViewportBackdropProps) {
  return (
    <BaseUiDrawer.Backdrop
      {...rest}
      className={classNames(styles.backdrop, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Backdrop>
  );
}
