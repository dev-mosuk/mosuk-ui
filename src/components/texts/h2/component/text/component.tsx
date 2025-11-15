import classNames from 'classnames';
import { ElementType } from 'react';
import styles from '../component.module.css';
import { H2TextProps } from './component.interface';
import React from 'react';

export function H2Text<C extends ElementType = 'span'>({ as, ...rest }: H2TextProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h2-text', styles.text, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
