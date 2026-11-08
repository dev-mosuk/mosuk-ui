import styles from '@/components/overlays/drawer/component/component.module.css';
import { DrawerPortalViewportPopupHandleProps } from '@/components/overlays/drawer/component/portal/viewport/popup/handle/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
