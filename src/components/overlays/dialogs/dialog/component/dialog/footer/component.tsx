import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../component.module.css';
import { FooterProps } from './component.interface';

export function Footer<C extends ElementType = 'div'>({
  ...rest
}: FooterProps<C>) {
  const Component = (rest?.as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      className={classNames('mosuk-dialog-dialog-footer', styles.footer, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
