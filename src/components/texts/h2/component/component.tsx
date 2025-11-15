import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H2Props } from './component.interface';
import styles from './component.module.css';

export function H2<C extends ElementType = 'h2'>({ as, ...rest }: H2Props<C>) {
  const Component = (as || 'h2') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h2', styles.h2, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
