import classNames from 'classnames';
import React from 'react';
import TextareaAutosizePrimitive from 'react-textarea-autosize';
import { Textarea } from '../../component/component';
import { TextareaAutosizeProps } from './component.interface';
import styles from './component.module.css';

export function TextareaAutosize({ ...rest }: TextareaAutosizeProps) {
  return (
    <Textarea
      {...rest}
      as={TextareaAutosizePrimitive}
      className={classNames(styles.textarea, rest?.className)}
    />
  );
}
