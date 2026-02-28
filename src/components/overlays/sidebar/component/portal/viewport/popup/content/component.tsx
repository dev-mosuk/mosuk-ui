import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { SidebarPortalViewportPopupContentProps } from './component.interface';

export function SidebarPortalViewportPopupContent<
  C extends ElementType = 'div',
>({ as, ...rest }: SidebarPortalViewportPopupContentProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-drawer-viewport-popup-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
