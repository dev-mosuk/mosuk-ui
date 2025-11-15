import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { H1TextSkeletonProps } from './component.interface';

export function H1TextSkeleton({ ...rest }: H1TextSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-h1-text-skeleton',
        styles.text,
        rest?.className
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
