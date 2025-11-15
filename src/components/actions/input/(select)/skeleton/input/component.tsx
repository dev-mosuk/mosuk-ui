import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../../display/skeleton/component/component';
import { InputInputSkeletonProps as ParentInputInputSkeletonProps } from '../../../skeleton/input/component.interface';
import styles from '../component.module.css';

export function InputSelectInputSkeleton({
  icon,
  ...rest
}: ParentInputInputSkeletonProps) {
  return (
    <div
      {...rest}
      className={
        classNames(
          'mosuk-input-skeleton-input',
          styles.input,
          rest?.className
        )
      }
    >
      {icon && <div className={classNames(styles.icon)} />}
      <Skeleton className={classNames(styles.field)} />
      <div className={classNames(styles.arrow)} />
    </div>
  );
}
