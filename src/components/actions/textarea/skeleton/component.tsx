import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { Skeleton } from '../../../../components/display/skeleton/component/component';
import { TextareaSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function TextareaSkeleton({ rows, ...props }: TextareaSkeletonProps) {
  return (
    <div
      {...props}
      className={classNames('mosuk-textarea-skeleton-textarea', styles.textarea, props?.className)}
      style={{ '--rows': rows ?? 4 } as CSSProperties}
    >      
      <Skeleton className={styles.field ?? ''} />
    </div>
  );
}
