import styles from '@/components/dialog/component.module.css';
import { DialogViewportPopupContentProps } from '@/components/dialog/viewport/popup/content/component.interface';
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
