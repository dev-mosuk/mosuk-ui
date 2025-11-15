import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H5Props } from './component.interface';
import styles from './component.module.css';

export function H5<C extends ElementType = 'h5'>({ as, ...rest }: H5Props<C>) {
  const Component = (as || 'h5') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h5', styles.h5, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
