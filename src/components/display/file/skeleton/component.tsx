import { File as FileIcon } from 'lucide-react';
import React from 'react';
import {
  FileSkeletonFileProps,
  FileSkeletonProps,
} from './component.interface';
import styles from './component.module.css';

export function FileSkeleton({ ...props }: FileSkeletonProps) {
  return (
    <div
      {...props}
      className={`mosuk-file-skeleton ${styles.container} ${
        props?.className ?? ''
      }`}
    >
      {props?.children}
    </div>
  );
}

export function FileSkeletonFile({ ...props }: FileSkeletonFileProps) {
  return (
    <FileIcon
      {...props}
      ref={props?.ref}
      className={`${styles.file} ${props?.className ?? ''}`}
    />
  );
}
