import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './../component.module.css';
import { EmptyButtonsProps } from './component.interface';

export function EmptyButtons<C extends ElementType = 'div'>({
  as,
  ...rest
}: EmptyButtonsProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-buttons',
        styles.buttons,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
