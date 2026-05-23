import styles from '@/components/display/card/(flip)/component/component.module.css';
import { CardFlipFrontProps } from '@/components/display/card/(flip)/component/front/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function CardFlipFront<C extends ElementType = 'div'>({
  as,
  ...rest
}: CardFlipFrontProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'card-flip-front',
        styles.cardFront,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
