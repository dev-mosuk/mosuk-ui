import React from 'react';
import { InputHint } from '../../../../../../atoms/inputs/input/component/hint/component';
import { InputHintProps } from '../../../../../../atoms/inputs/input/component/hint/component.interface';
import styles from '../component.module.css';

export function SelectHint({ children, ...props }: InputHintProps) {
  return (
    <InputHint
      {...props}
      className={
        (styles.hint ?? '') +
        ' ' +
        (styles[props?.type ?? ''] ?? '') +
        ' ' +
        (props?.className ?? '')
      }
    >
      {children}
    </InputHint>
  );
}
