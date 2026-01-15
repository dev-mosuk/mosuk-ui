import classNames from 'classnames';
import React, { ElementType } from 'react';
import { InputProps } from './component.interface';
import styles from './component.module.css';

export function Input<C extends ElementType = 'input'>({
  as,
  ...rest
}: InputProps<C>) {
  const Component = (as || 'input') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      id={rest.id}
      name={rest.name ?? rest.id}
      className={classNames('mosuk-input', styles.input, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
