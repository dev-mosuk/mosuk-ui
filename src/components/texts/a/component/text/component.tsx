import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { ATextProps } from './component.interface';

export function AText<C extends ElementType = 'span'>({ as, ...rest }: ATextProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-a-text', styles.text, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
