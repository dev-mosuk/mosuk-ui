import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import {
  InputHintSkeletonProps
} from './component.interface';

export function InputHintSkeleton({ ...rest }: InputHintSkeletonProps) {
  return (
    <div {...rest} className={classNames('mosuk-input-skeleton-hint', styles.hint, rest?.className)}>
      <Skeleton className={classNames(styles.icon)} />
      <Skeleton className={classNames(styles.text)} />
    </div>
  );
}
