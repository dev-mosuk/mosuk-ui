import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../component.module.css';
import { HeaderProps } from './component.interface';

export function Header<C extends ElementType = 'div'>({
  ...rest
}: HeaderProps<C>) {
  const Component = (rest?.as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      className={classNames('mosuk-dialog-dialog-header', styles.header, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
