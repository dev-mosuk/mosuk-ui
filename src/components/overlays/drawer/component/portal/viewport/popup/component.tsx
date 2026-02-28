import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DrawerPortalViewportPopupProps } from './component.interface';

export function DrawerPortalViewportPopup({
  ...rest
}: DrawerPortalViewportPopupProps) {
  return (
    <BaseUiDrawer.Popup
      {...rest}
      className={classNames(styles.popup, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Popup>
  );
}
