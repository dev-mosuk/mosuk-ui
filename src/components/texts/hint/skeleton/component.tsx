import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { HintSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function HintSkeleton({ ...props }: HintSkeletonProps) {
  return (
    <div
      {...props}
      className={classNames('mosuk-hint-skeleton', styles.hint, props.className)}
    >
      <Skeleton className={styles.icon} /> 
      <Skeleton className={styles.text} />
    </div>
  );
}
