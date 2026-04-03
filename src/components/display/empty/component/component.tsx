import classNames from 'classnames';
import React, { ElementType } from 'react';
import { EmptyProps } from './component.interface';
import styles from './component.module.css';

export function Empty<C extends ElementType = 'section'>({
  as,
  ...rest
}: EmptyProps<C>) {
  const Component = (as || 'section') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-empty', styles.empty, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
