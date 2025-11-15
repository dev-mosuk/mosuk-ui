import classNames from 'classnames';
import React, { ElementType } from 'react';
import { ButtonProps } from './component.interface';
import styles from './component.module.css';

export function Button<C extends ElementType = 'button'>({
  as,
  ...rest
}: ButtonProps<C>) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-button', styles.button, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
 