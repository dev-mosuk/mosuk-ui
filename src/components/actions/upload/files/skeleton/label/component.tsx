import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { UploadFilesSkeletonLabelProps } from './component.interface';

export function UploadFilesSkeletonLabel({ ...rest }: UploadFilesSkeletonLabelProps) {
  return (
    <div
      {...rest}
      className={classNames('mosuk-upload-files-skeleton-label', styles.label, rest?.className)}
    >
      {rest?.children}
    </div>
  );
}
