import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../../../display/skeleton/component/component';
import styles from '../../component.module.css';
import { PaginationTableSkeletonHeadColumnProps } from './component.interface';

export function PaginationTableSkeletonHeadColumn({
  ...props
}: PaginationTableSkeletonHeadColumnProps) {
  return (
    <div {...props} className={classNames(styles.column, props?.className)}>
      <Skeleton className={styles.icon ?? ''} />
      <Skeleton className={styles.text ?? ''} />
    </div>
  );
}
