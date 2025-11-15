import classNames from 'classnames';
import React, { useContext } from 'react';
import { InputHint } from '../../../component/hint/component';
import { InputHintProps } from '../../../component/hint/component.interface';
import { InputFilesContext } from '../component';
import styles from '../component.module.css';

export function InputFilesHint({ ...props }: InputHintProps) {
  const context = useContext(InputFilesContext);

  if (!context) {
    throw new Error('InputFilesInput должен использоваться только внутри компонента InputFiles');
  }

  return (
    <InputHint
      {...props}
      className={classNames(
        {
          'mosuk-input-files-hint': true,
          [styles.hint]: styles.hint,
          [styles[props?.type ?? '']]: props?.type,
        },
        props.className ?? ''
      )}
    >
      {props?.children}
    </InputHint>
  );
}
