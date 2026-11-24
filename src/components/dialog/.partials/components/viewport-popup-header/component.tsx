import { DialogViewportPopupHeaderProps } from '@/components/dialog/.partials/components/viewport-popup-header/component.interface';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DialogViewportPopupHeader<C extends ElementType = 'div'>({
  as,
  ...rest
}: DialogViewportPopupHeaderProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup-header',
        styles.header,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
