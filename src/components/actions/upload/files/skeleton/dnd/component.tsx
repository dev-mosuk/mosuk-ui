import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { UploadFilesSkeletonDndProps } from './component.interface';

export function UploadFilesSkeletonDnd({ ...rest }: UploadFilesSkeletonDndProps) {
  return (
    <div
      {...rest}
      className={classNames('mosuk-upload-files-skeleton-dnd', styles.dnd, rest?.className)}
    >
      {rest?.children}
    </div>
  );
}
