import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { H6TextSkeletonProps } from './component.interface';

export function H6TextSkeleton({ ...rest }: H6TextSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-h6-text-skeleton',
        styles.text,
        rest?.className
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
