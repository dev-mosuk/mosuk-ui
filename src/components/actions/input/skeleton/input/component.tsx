import React from 'react';
import { Skeleton } from '../../../../skeletons/skeleton/component';
import styles from '../component.module.css';
import {
    InputSkeletonInputProps
} from './component.interface';

export function InputSkeletonInput({
  icon,
  ...props
}: InputSkeletonInputProps) {
  return (
    <div {...props} className={'mosuk-input-skeleton-input' + ' ' + (styles.input ?? '') + ' ' + (props?.className ?? '')}>
      {icon && <div className={styles.icon ?? ''} />}
      <Skeleton className={styles.field ?? ''} />
    </div>
  );
}