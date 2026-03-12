import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DrawerPortalViewportPopupContentProps } from './component.interface';

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
