import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { CardFlipBackProps } from './component.interface';

export function CardFlipBack<C extends ElementType = 'div'>({
  as,
  ...rest
}: CardFlipBackProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'card-flip-back',
        styles.cardBack,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
