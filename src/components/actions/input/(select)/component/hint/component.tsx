import classNames from 'classnames';
import React from 'react';
import { InputHint } from '../../../component/hint/component';
import { InputHintProps } from '../../../component/hint/component.interface';
import styles from '../component.module.css';

export function InputSelectHint({ children, ...props }: InputHintProps) {
  return (
    <InputHint
      {...props}
      className={
        classNames(
          styles.hint,
          styles[props?.type ?? ''],
          props?.className
        )
      }
    >
      {children}
    </InputHint>
  );
}
