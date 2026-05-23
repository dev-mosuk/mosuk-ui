import {
  FileSkeletonFileProps,
  FileSkeletonProps,
} from '@/components/display/file/skeleton/component.interface';
import styles from '@/components/display/file/skeleton/component.module.css';
import { File as FileIcon } from 'lucide-react';
import React from 'react';

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
