import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DrawerBottomPortalViewportPopupProps } from './component.interface';

export function DrawerBottomPortalViewportPopup({
  ...rest
}: DrawerBottomPortalViewportPopupProps) {
  return (
    <BaseUiDrawer.Popup
      {...rest}
      className={classNames(styles.popup, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Popup>
  );
}
