import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../../component.module.css';
import { DialogPortalViewportPopupContentProps } from './component.interface';

export function DialogPortalViewportPopupContent<
  C extends ElementType = 'div',
>({ as, ...rest }: DialogPortalViewportPopupContentProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
