import styles from '@/components/overlays/drawer/component/.partials/styles/component.module.css';
import { DrawerPortalViewportPopupContentProps } from '@/components/overlays/drawer/component/.partials/components/portal/viewport/popup/content/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function DrawerPortalViewportPopupContent<
  C extends ElementType = 'div',
>({ as, ...rest }: DrawerPortalViewportPopupContentProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-drawer-portal-viewport-popup-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
