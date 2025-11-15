import React from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { TextareaSkeletonHintProps } from './component.interface';

export function TextareaSkeletonHint({
  ...props
}: TextareaSkeletonHintProps) {
  return (
    <div {...props} className={'mosuk-textarea-skeleton-hint' + ' ' + (styles.hint ?? '') + ' ' + (props?.className ?? '')}>
      <Skeleton className={styles.icon ?? ''} />
      <Skeleton className={styles.text ?? ''} />
    </div>
  );
}
