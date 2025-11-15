import classNames from 'classnames';
import React from 'react';
import { InputFilesSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function InputFilesSkeleton({ ...props }: InputFilesSkeletonProps) {
  return (
    <fieldset
      {...props}
      className={classNames('mosuk-input-files-skeleton', styles.fieldset, props.className)}
    >
      {props?.children}
    </fieldset>
  );
}
