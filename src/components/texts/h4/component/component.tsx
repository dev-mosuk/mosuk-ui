import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H4Props } from './component.interface';
import styles from './component.module.css';

export function H4<C extends ElementType = 'h4'>({ as, ...rest }: H4Props<C>) {
  const Component = (as || 'h4') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h4', styles.h4, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
