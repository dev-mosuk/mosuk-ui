import classNames from 'classnames';
import React, { useContext } from 'react';
import { UploadFilesContext } from '../component';
import styles from '../component.module.css';
import { UploadFilesLabelProps } from './component.interface';

export function UploadFilesLabel({ ...props }: UploadFilesLabelProps) {
  const context = useContext(UploadFilesContext);

  if (!context) {
    throw new Error('UploadFilesLabel должен использоваться только внутри компонента UploadFiles');
  }

  const { id } = context;

  return (
    <label
      {...props}
      htmlFor={props?.htmlFor ?? id ?? ''}
      title={props?.title ?? 'Добавить файлы'}
      className={classNames('mosuk-upload-files-label', styles.label, props?.className)}
    >
      {props?.children}
    </label>
  );
}
