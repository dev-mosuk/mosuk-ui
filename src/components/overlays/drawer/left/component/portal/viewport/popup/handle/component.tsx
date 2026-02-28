import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DrawerLeftPortalViewportPopupHandleProps } from './component.interface';

export function DrawerLeftPortalViewportPopupHandle<
  C extends ElementType = 'div',
>({ as, ...rest }: DrawerLeftPortalViewportPopupHandleProps<C>) {
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
