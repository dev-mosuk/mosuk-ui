import classNames from 'classnames';
import React, { ElementType } from 'react';
import { AProps } from './component.interface';
import styles from './component.module.css';

export function A<C extends ElementType = 'a'>({ as, ...rest }: AProps<C>) {
  const Component = (as || 'a') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-a', styles.a, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
 