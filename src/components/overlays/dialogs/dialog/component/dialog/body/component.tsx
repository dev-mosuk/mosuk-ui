import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../component.module.css';
import { BodyProps } from './component.interface';

export function Body<C extends ElementType = 'div'>({
  ...rest
}: BodyProps<C>) {
  const Component = (rest?.as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      className={classNames('mosuk-dialog-dialog-body', styles.body, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
