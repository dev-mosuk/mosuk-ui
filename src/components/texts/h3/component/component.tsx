import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H3Props } from './component.interface';
import styles from './component.module.css';

export function H3<C extends ElementType = 'h3'>({ as, ...rest }: H3Props<C>) {
  const Component = (as || 'h3') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h3', styles.h3, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
