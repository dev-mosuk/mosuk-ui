import React, { useContext, useId } from 'react';
import { FileContext } from '../component';
import styles from '../component.module.css';
import { FileInputProps } from './component.interface';

export function FileInput({ ...props }: FileInputProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileInput должен использоваться только внутри компонента File'
    );
  }

  if (!props?.id) {
    props.id = useId();
  }

  return (
    <input
      {...props}
      type={props.type ?? 'text'}
      id={props?.id}
      name={props.name ?? props.id}
      placeholder={props?.placeholder ?? 'Название файла'}
      className={(styles.input ?? '') + ' ' + (props?.className ?? '')}
    />
  );
}
