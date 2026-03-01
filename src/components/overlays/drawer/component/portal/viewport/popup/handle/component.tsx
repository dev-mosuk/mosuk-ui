import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DrawerPortalViewportPopupHandleProps } from './component.interface';

export function DrawerPortalViewportPopupHandle<C extends ElementType = 'div'>({
  as,
  ...rest
}: DrawerPortalViewportPopupHandleProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-drawer-portal-wviewport-popup-handle',
        styles.handle,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
