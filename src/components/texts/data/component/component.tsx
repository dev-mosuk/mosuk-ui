import classNames from 'classnames';
import React, { ElementType } from 'react';
import { DataProps } from './component.interface';
import styles from './component.module.css';

export function Data<C extends ElementType = 'data'>({
  as,
  ...rest
}: DataProps<C>) {
  const Component = (as || 'data') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-data', styles.data, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
