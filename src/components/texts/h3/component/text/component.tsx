import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { H3TextProps } from './component.interface';

export function H3Text<C extends ElementType = 'span'>({ as, ...rest }: H3TextProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h3-text', styles.text, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
