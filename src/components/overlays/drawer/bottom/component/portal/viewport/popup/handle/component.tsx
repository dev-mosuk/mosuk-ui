import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DrawerBottomPortalViewportPopupHandleProps } from './component.interface';

export function DrawerBottomPortalViewportPopupHandle<
  C extends ElementType = 'div',
>({ as, ...rest }: DrawerBottomPortalViewportPopupHandleProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-drawer-viewport-popup-handle',
        styles.handle,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
