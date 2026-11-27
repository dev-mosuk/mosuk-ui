import { DrawerViewportPopupFooterProps } from '@/components/drawer/.partials/components/viewport-popup-footer/component.interface';
import styles from '@/components/drawer/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DrawerViewportPopupFooter<C = 'div'>({
  as,
  ...rest
}: DrawerViewportPopupFooterProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-drawer-viewport-popup-footer',
        styles.footer,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
