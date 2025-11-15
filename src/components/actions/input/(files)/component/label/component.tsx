import React, { useContext } from 'react';
import { InputFilesContext } from '../component';
import styles from '../component.module.css';
import { InputFilesLabelProps } from './component.interface';

export function InputFilesLabel({ ...props }: InputFilesLabelProps) {
  const context = useContext(InputFilesContext);

  if (!context) {
    throw new Error('InputFilesLabel должен использоваться только внутри компонента InputFiles');
  }

  const { id } = context;

  return (
    <label
      {...props}
      htmlFor={props?.htmlFor ?? id ?? ''}
      title={props?.title ?? 'Добавить файлы'}
      className={`mosuk-input-files-label ${styles.label} ${props?.className ?? ''}`}
    >
      {props?.children}
    </label>
  );
}
