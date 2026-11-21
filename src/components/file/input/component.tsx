import { FileContext } from '@/components/display/file/component';
import styles from '@/components/display/file/component.module.css';
import { FileInputProps } from '@/components/display/file/input/component.interface';
import React, { useContext, useId } from 'react';

export function FileInput({ ...props }: FileInputProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileInput должен использоваться только внутри компонента File',
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
