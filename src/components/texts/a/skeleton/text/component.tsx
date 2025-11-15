import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import component from '../../component/component.module.css';
import skeleton from '../component.module.css';
import { ATextSkeletonProps } from './component.interface';

export function ATextSkeleton({ ...rest }: ATextSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-a-text-skeleton',
        component.text,
        skeleton.text,
        rest?.className
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
