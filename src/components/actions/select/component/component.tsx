import classNames from 'classnames';
import React from 'react';
import { Input } from '../../component/component';
import { InputProps } from '../../component/component.interface';
import styles from './component.module.css';

export function Select({ ref, children, ...rest }: InputProps) {
  return (
    <Input
      {...rest}
      ref={ref}
      className={classNames(styles.fieldset, rest?.className)}
    >
      {children}
    </Input>
  );
}
