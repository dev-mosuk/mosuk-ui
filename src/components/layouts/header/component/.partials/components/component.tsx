import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../styles/style.module.css';
import { HeaderProps } from './component.interface';

export function Header<C extends ElementType = 'header'>({
  ...rest
}: HeaderProps<C>) {
  const Component = (rest?.as || 'header') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-header', styles.header, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
