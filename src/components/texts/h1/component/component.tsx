import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H1Props } from './component.interface';
import styles from './component.module.css';

export function H1<C extends ElementType = 'h1'>({ as, ...rest }: H1Props<C>) {
  const Component = (as || 'h1') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h1', styles.h1, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
