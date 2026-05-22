import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../../display/skeleton/component/component';
import styles from '../../../component/.partials/styles/style.module.css';
import { CheckboxSkeletonProps } from './component.interface';

export function CheckboxSkeleton({ ...rest }: CheckboxSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-checkbox-skeleton',
        styles.checkbox,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
