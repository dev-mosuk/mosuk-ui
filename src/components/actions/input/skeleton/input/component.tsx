import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import {
  InputInputSkeletonProps
} from './component.interface';

export function InputInputSkeleton({
  icon,
  ...rest
}: InputInputSkeletonProps) {
  return (
    <div {...rest} className={classNames('mosuk-input-skeleton-input', styles.input, rest?.className)}>
      {icon && <div className={classNames(styles.icon)} />}
      <Skeleton className={classNames(styles.field)} />
    </div>
  );
}