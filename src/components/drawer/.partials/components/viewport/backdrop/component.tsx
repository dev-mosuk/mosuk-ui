import styles from '@/components/drawer/.partials/styles/component.module.css';
import { DrawerViewportBackdropProps } from '@/components/drawer/.partials/components/viewport/backdrop/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerViewportBackdrop({
  ...rest
}: DrawerViewportBackdropProps) {
  return (
    <BaseUiDrawer.Backdrop
      {...rest}
      className={classNames(
        'mosuk-drawer-viewport-backdrop',
        styles.backdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiDrawer.Backdrop>
  );
}
