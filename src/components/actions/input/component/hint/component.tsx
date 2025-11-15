import { Info } from 'lucide-react';
import React, { useContext } from 'react';
import { InputContext } from '../component';
import styles from '../component.module.css';
import { InputHintTypeIcon } from './component.constants';
import { InputHintProps } from './component.interface';

export function InputHint({ type, ...props }: InputHintProps) {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('Input.Hint must be used within an Input component.');
  }

  const Icon = type ? InputHintTypeIcon[type] : Info;

  return (
    props?.children && (
      <p
        {...props}
        className={'mosuk-input-hint' + ' ' + (styles.hint ?? '') + ' ' + (styles[type ?? ''] ?? '') + ' ' + (props?.className ?? '')}
      >
        <Icon />
        {props?.children}
      </p>
    )
  );
}
