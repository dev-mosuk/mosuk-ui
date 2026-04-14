import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './../component.module.css';
import { EmptyIconProps } from './component.interface';

export function EmptyIcon<C extends ElementType = 'div'>({
  as,
  ...rest
}: EmptyIconProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-empty-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
