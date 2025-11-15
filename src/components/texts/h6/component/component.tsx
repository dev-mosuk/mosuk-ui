import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H6Props } from './component.interface';
import styles from './component.module.css';

export function H6<C extends ElementType = 'h6'>({ as, ...rest }: H6Props<C>) {
  const Component = (as || 'h6') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h6', styles.h6, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
