import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { UploadFilesSkeletonDndElementProps } from './component.interface';

export function UploadFilesSkeletonDndElement({
  ...rest
}: UploadFilesSkeletonDndElementProps) {
  return (
    <div
      {...rest}
      className={
        classNames(
          'mosuk-upload-files-dnd-element',
          styles.element,
          rest?.className ?? ''
        )
      }
    >
      {rest?.children}
    </div>
  );
}
