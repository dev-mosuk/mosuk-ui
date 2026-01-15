import classNames from 'classnames';
import React from 'react';
import { InputHint } from '../../../component/hint/component';
import { InputHintType } from '../../../component/hint/component.enums';
import { InputHintProps } from '../../../component/hint/component.interface';
import styles from '../component.module.css';

export function InputSelectHint({ children, ...props }: InputHintProps) {
  return (
    <InputHint
      {...props}
      className={classNames(
        styles.hint,
        styles[props?.type ?? InputHintType.INFO],
        props?.className
      )}
    >
      {children}
    </InputHint>
  );
}
