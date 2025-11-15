import React from 'react';
import { Input } from '../../../../../atoms/inputs/input/component/component';
import { InputProps } from '../../../../../atoms/inputs/input/component/component.interface';
import styles from './component.module.css';

export function Select({ ref, children, ...props }: InputProps) {
  return (
    <Input
      {...props}
      ref={ref}
      className={(styles.fieldset ?? '') + ' ' + (props?.className ?? '')}
    >
      {children}
    </Input>
  );
}
