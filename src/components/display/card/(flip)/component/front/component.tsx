import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../component/component.module.css';
import { CardFlipFrontProps } from './component.interface';

export function CardFlipFront<C extends ElementType = 'div'>({
  as,
  ...rest
}: CardFlipFrontProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('card-flip-front', styles.cardFront, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
