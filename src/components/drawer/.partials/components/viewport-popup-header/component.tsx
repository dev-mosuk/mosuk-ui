import { DrawerViewportPopupHeaderProps } from '@/components/drawer/.partials/components/viewport-popup-header/component.interface';
import styles from '@/components/drawer/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DrawerViewportPopupHeader<C extends ElementType = 'div'>({
  as,
  ...rest
}: DrawerViewportPopupHeaderProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-drawer-viewport-popup-header',
        styles.header,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
