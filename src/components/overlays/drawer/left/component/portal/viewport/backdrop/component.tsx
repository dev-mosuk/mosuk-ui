import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DrawerLeftPortalViewportBackdropProps } from './component.interface';

export function DrawerLeftPortalViewportBackdrop({
  ...rest
}: DrawerLeftPortalViewportBackdropProps) {
  return (
    <BaseUiDrawer.Backdrop
      {...rest}
      className={classNames(styles.backdrop, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Backdrop>
  );
}
