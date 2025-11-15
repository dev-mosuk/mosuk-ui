import React from 'react';
import {
  TextareaSkeletonProps
} from './component.interface';
import styles from './component.module.css';

export function TextareaSkeleton({
  ...props
}: TextareaSkeletonProps) {
  return (
    <div
      {...props}
      className={'mosuk-input-skeleton' + ' ' + (styles.fieldset ?? '') + ' ' + (props?.className ?? '')}
    >
      {props?.children}
    </div>
  );
}