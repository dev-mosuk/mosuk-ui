import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { InputFilesSkeletonDndProps } from './component.interface';

export function InputFilesSkeletonDnd({ ...props }: InputFilesSkeletonDndProps) {
  return (
    <div
      {...props}
      className={classNames('mosuk-input-files-skeleton-dnd', styles.dnd, props.className)}
    >
      {props?.children}
    </div>
  );
}
