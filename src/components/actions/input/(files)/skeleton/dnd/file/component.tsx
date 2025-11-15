import React from 'react';
import styles from '../../component.module.css';
import { InputFilesSkeletonDndElementProps } from './component.interface';

export function InputFilesSkeletonDndElement({
  ...props
}: InputFilesSkeletonDndElementProps) {
  return (
    <div
      {...props}
      className={
        'mosuk-input-files-dnd-element' +
        ' ' +
        (styles.element ?? '') +
        ' ' +
        (props.className ?? '')
      }
    >
      {props?.children}
    </div>
  );
}
