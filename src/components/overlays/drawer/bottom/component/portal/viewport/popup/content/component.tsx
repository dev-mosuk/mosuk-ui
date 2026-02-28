import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DrawerBottomPortalViewportPopupContentProps } from './component.interface';

export function DrawerBottomPortalViewportPopupContent<
  C extends ElementType = 'div',
>({ as, ...rest }: DrawerBottomPortalViewportPopupContentProps<C>) {
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
