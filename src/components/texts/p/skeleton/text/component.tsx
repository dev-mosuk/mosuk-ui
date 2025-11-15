import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { PTextSkeletonProps } from './component.interface';

export function PTextSkeleton({ ...rest }: PTextSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-p-text-skeleton',
        styles.text,
        rest?.className
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
