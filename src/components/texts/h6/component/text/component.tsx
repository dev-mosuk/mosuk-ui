import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { H6TextProps } from './component.interface';

export function H6Text<C extends ElementType = 'span'>({ as, ...rest }: H6TextProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h6-text', styles.text, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
