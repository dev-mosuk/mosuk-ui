import classNames from 'classnames';
import React, { ElementType } from 'react';
import { CardProps } from './component.interface';
import styles from './component.module.css';

export function Card<C extends ElementType = 'div'>({
  as,
  ...rest
}: CardProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-card', styles.card, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
