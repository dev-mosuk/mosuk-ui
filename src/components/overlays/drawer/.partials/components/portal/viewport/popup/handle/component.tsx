import { DrawerPortalViewportPopupHandleProps } from '@/components/overlays/drawer/.partials/components/portal/viewport/popup/handle/component.interface';
import styles from '@/components/overlays/drawer/.partials/styles/component.module.css';
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
        'mosuk-drawer-portal-viewport-popup-handle',
        styles.handle,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
