import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DrawerBottomPortalViewportBackdropProps } from './component.interface';

export function DrawerBottomPortalViewportBackdrop({
  ...rest
}: DrawerBottomPortalViewportBackdropProps) {
  return (
    <BaseUiDrawer.Backdrop
      {...rest}
      className={classNames(styles.backdrop, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Backdrop>
  );
}
