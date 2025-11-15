import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { PTextProps } from './component.interface';

export function PText<C extends ElementType = 'span'>({ as, ...rest }: PTextProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-p-text', styles.text, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
