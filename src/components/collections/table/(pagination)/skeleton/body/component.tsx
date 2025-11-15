import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { PaginationTableSkeletonBodyProps } from './component.interface';

export function PaginationTableSkeletonBody({ ...props }: PaginationTableSkeletonBodyProps) {
  return (
    <div className={classNames(styles.body, props?.className)} {...props}>
      {props?.children}
    </div>
  );
}
