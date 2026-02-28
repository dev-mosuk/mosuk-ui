import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { SidebarPortalViewportPopupHandleProps } from './component.interface';

export function SidebarPortalViewportPopupHandle<
  C extends ElementType = 'div',
>({ as, ...rest }: SidebarPortalViewportPopupHandleProps<C>) {
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
