import React from 'react';
import { Skeleton } from '../../../../skeletons/skeleton/component';
import styles from '../component.module.css';
import {
    InputHintSkeletonProps
} from './component.interface';

export function InputHintSkeleton({ ...props }: InputHintSkeletonProps) {
  return (
    <div {...props} className={'mosuk-input-skeleton-hint' + ' ' + (styles.hint ?? '') + ' ' + (props?.className ?? '')}>
      <Skeleton className={styles.icon ?? ''} />
      <Skeleton className={styles.text ?? ''} />
    </div>
  );
}
