import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { TextareaSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function TextareaSkeleton({ rows, ...rest }: TextareaSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      style={{ '--rows': rows ?? 3 } as CSSProperties}
      className={classNames('mosuk-textarea-skeleton', styles.textarea, rest?.className)}
    />
  );
}
