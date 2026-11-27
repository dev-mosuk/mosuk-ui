import { DrawerViewportPopupHandleProps } from '@/components/drawer/.partials/components/viewport-popup-handle/component.interface';
import styles from '@/components/drawer/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function DrawerViewportPopupHandle<C = 'div'>({
  as,
  ...rest
}: DrawerViewportPopupHandleProps<C>) {
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
