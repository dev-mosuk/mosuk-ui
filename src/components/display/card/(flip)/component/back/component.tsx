import { CardFlipBackProps } from '@/components/display/card/(flip)/component/back/component.interface';
import styles from '@/components/display/card/(flip)/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function CardFlipBack<C extends ElementType = 'div'>({
  as,
  ...rest
}: CardFlipBackProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('card-flip-back', styles.cardBack, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
