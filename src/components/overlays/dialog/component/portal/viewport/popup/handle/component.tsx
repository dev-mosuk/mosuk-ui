import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DialogPortalViewportPopupHandleProps } from './component.interface';

export function DialogPortalViewportPopupHandle<C extends ElementType = 'div'>({
  as,
  ...rest
}: DialogPortalViewportPopupHandleProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup-handle',
        styles.handle,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
