import classNames from 'classnames';
import React, { ElementType } from 'react';
import { RowProps } from './component.interface';
import styles from './component.module.css';

export function Row<C extends ElementType = 'div'>({
  as,
  ...rest
}: RowProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-row', styles.row, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
