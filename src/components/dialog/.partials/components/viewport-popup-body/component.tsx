import { DialogViewportPopupBodyProps } from '@/components/dialog/.partials/components/viewport-popup-body/component.interface';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DialogViewportPopupBody<C = 'div'>({
  as,
  ...rest
}: DialogViewportPopupBodyProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup-body',
        styles.body,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
