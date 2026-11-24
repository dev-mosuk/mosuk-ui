import { DrawerViewportPopupProps } from '@/components/drawer/.partials/components/viewport-popup/component.interface';
import { DRAWER_DEFAULT_VARIANT } from '@/components/drawer/.partials/constants/component.constants';
import { DrawerDirection } from '@/components/drawer/.partials/enums/component.enums';
import { useDrawer } from '@/components/drawer/.partials/hooks/hook';
import styles from '@/components/drawer/.partials/styles/component.module.css';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerViewportPopup({
  variant = DRAWER_DEFAULT_VARIANT,
  ...rest
}: DrawerViewportPopupProps) {
  const { direction } = useDrawer();

  return (
    <BaseUiDrawer.Popup
      {...rest}
      data-variant={variant}
      data-direction={direction}
      {...(direction === DrawerDirection.Center
        ? { 'data-base-ui-swipe-ignore': '' }
        : undefined)}
      className={classNames(
        'mosuk-drawer-viewport-popup',
        styles.popup,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiDrawer.Popup>
  );
}
