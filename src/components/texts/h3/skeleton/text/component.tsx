import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { H3TextSkeletonProps } from './component.interface';

export function H3TextSkeleton({ ...rest }: H3TextSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-h3-text-skeleton',
        styles.text,
        rest?.className
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
