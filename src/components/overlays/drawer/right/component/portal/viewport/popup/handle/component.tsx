import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DrawerRightPortalViewportPopupHandleProps } from './component.interface';

export function DrawerRightPortalViewportPopupHandle<
  C extends ElementType = 'div',
>({ as, ...rest }: DrawerRightPortalViewportPopupHandleProps<C>) {
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
