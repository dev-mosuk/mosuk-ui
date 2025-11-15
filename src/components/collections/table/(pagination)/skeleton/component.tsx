import React from 'react';
import { PaginationTableSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function PaginationTableSkeleton({
  ...props
}: PaginationTableSkeletonProps) {
  return (
    <section
      className={(styles.table ?? '') + ' ' + (props.className ?? '')}
      {...props}
    >
      {props?.children}
    </section>
  );
}
