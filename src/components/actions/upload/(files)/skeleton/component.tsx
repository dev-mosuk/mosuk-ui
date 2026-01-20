import classNames from 'classnames';
import React from 'react';
import { UploadFilesSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function UploadFilesSkeleton({ ...rest }: UploadFilesSkeletonProps) {
  return (
    <fieldset
      {...rest}
      className={classNames('mosuk-upload-files-skeleton', styles.fieldset, rest?.className)}
    >
      {rest?.children}
    </fieldset>
  );
}
