import classNames from 'classnames';
import React, { ElementType } from 'react';
import { PProps } from './component.interface';
import styles from './component.module.css';

export function P<C extends ElementType = 'p'>({ as, ...rest }: PProps<C>) {
  const Component = (as || 'p') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-p', styles.p, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
