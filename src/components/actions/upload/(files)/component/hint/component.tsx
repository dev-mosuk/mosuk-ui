import classNames from 'classnames';
import React, { useContext } from 'react';
import { InputHint } from '../../../../../input/component/hint/component';
import { InputHintProps } from '../../../../../input/component/hint/component.interface';
import { UploadFilesContext } from '../component';
import styles from '../component.module.css';

export function UploadFilesHint({ ...rest }: InputHintProps) {
  const context = useContext(UploadFilesContext);

  if (!context) {
    throw new Error('UploadFilesHint должен использоваться только внутри компонента UploadFiles');
  }

  return (
    <InputHint
      {...rest}
      className={classNames(
        'mosuk-upload-files-hint',
        styles.hint,
        rest?.className
      )}
    >
      {rest?.children}
    </InputHint>
  );
}
