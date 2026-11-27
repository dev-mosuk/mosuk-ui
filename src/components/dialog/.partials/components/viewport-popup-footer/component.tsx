import { DialogViewportPopupFooterProps } from '@/components/dialog/.partials/components/viewport-popup-footer/component.interface';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DialogViewportPopupFooter<C = 'div'>({
  as,
  ...rest
}: DialogViewportPopupFooterProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup-footer',
        styles.footer,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
