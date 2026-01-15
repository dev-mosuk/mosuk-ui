import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import styles from '../component.module.css';
import { TextareaSkeletonTextareaProps } from './component.interface';

export function TextareaTextareaSkeleton({ icon, rows, ...props }: TextareaSkeletonTextareaProps) {
  return (
    <div
      {...props}
      className={classNames('mosuk-textarea-skeleton-textarea', styles.textarea, props?.className)}
      style={{ '--rows': rows ?? 4 } as CSSProperties}
    >
      {icon && <div className={styles.icon ?? ''} />}
      <Skeleton className={styles.field ?? ''} />
    </div>
  );
}
