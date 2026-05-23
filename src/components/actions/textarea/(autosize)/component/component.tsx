import { TextareaAutosizeProps } from '@/components/actions/textarea/(autosize)/component/component.interface';
import styles from '@/components/actions/textarea/(autosize)/component/component.module.css';
import { Textarea } from '@/components/actions/textarea/component/component';
import classNames from 'classnames';
import React from 'react';
import TextareaAutosizePrimitive from 'react-textarea-autosize';

export function TextareaAutosize({ ...rest }: TextareaAutosizeProps) {
  return (
    <Textarea
      {...rest}
      as={TextareaAutosizePrimitive}
      className={classNames(styles.textarea, rest?.className)}
    />
  );
}
