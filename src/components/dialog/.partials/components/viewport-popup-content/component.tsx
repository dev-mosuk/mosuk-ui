import { DialogViewportPopupContentProps } from '@/components/dialog/.partials/components/viewport-popup-content/component.interface';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function DialogViewportPopupContent<C extends ElementType = 'div'>({
  as,
  ...rest
}: DialogViewportPopupContentProps<C>) {
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
