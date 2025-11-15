import React from 'react';
import { Skeleton } from '../../../../../display/skeleton/component/component';
import { InputSkeletonInputProps } from '../../../skeleton/input/component.interface';
import styles from '../component.module.css';

export function InputSelectSkeletonInput({
  icon,
  ...props
}: InputSkeletonInputProps) {
  return (
    <div
      {...props}
      className={
        'mosuk-input-skeleton-input' +
        ' ' +
        (styles.input ?? '') +
        ' ' +
        (props?.className ?? '')
      }
    >
      {icon && <div className={styles.icon ?? ''} />}
      <Skeleton className={styles.field ?? ''} />
      <div className={styles.arrow ?? ''} />
    </div>
  );
}
