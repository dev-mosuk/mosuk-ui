import { Skeleton } from '@/components/core/skeleton/component/component';
import { HintSkeletonProps } from '@/components/texts/hint/skeleton/component.interface';
import styles from '@/components/texts/hint/skeleton/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function HintSkeleton({ ...props }: HintSkeletonProps) {
  return (
    <div
      {...props}
      className={classNames(
        'mosuk-hint-skeleton',
        styles.hint,
        props.className,
      )}
    >
      <Skeleton className={styles.icon} />
      <Skeleton className={styles.text} />
    </div>
  );
}
