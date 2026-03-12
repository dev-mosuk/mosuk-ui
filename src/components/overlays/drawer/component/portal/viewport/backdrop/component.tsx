import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DrawerPortalViewportBackdropProps } from './component.interface';

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
