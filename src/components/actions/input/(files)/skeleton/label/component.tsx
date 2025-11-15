import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { InputFilesSkeletonLabelProps } from './component.interface';

export function InputFilesSkeletonLabel({ ...props }: InputFilesSkeletonLabelProps) {
  return (
    <div
      {...props}
      className={classNames('mosuk-input-files-skeleton-label', styles.label, props.className)}
    >
      {props?.children}
    </div>
  );
}
