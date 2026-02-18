import classNames from 'classnames';
import React, { ElementType } from 'react';
import { GridProps } from './component.interface';
import styles from './component.module.css';

export function Grid<C extends ElementType = 'div'>({
  as,
  ...rest
}: GridProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-grid', styles.grid, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
