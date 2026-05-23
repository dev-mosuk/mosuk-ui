import { CardProps } from '@/components/display/card/component/component.interface';
import styles from '@/components/display/card/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
