import { Info } from 'lucide-react';
import React, { useContext } from 'react';
import { TextareaContext } from '../component';
import styles from '../component.module.css';
import { TextareaHintTypeIcon } from './component.constants';
import { TextareaHintProps } from './component.interface';

export function TextareaHint({ type, ...props }: TextareaHintProps) {
  const context = useContext(TextareaContext);

  if (!context) {
    throw new Error('Input.Hint must be used within an Input component.');
  }

  const Icon = type ? TextareaHintTypeIcon[type] : Info;

  return (
    props?.children && (
      <p
        {...props}
        className={'mosuk-textarea-hint' + ' ' + (styles.hint ?? '') + ' ' + (styles[type ?? ''] ?? '') + ' ' + (props?.className ?? '')}
      >
        <Icon />
        {props?.children}
      </p>
    )
  );
}
