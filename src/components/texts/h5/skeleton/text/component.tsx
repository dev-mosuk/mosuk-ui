import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { H5TextSkeletonProps } from './component.interface';

export function H5TextSkeleton({ ...rest }: H5TextSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-h5-text-skeleton',
        styles.text,
        rest?.className
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
