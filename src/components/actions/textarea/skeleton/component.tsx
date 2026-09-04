import { TextareaSkeletonProps } from '@/components/actions/textarea/skeleton/component.interface';
import styles from '@/components/actions/textarea/skeleton/component.module.css';
import { Skeleton } from '@/components/core/skeleton/component/component';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';

export function TextareaSkeleton({ rows, ...rest }: TextareaSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      style={{ '--rows': rows ?? 3 } as CSSProperties}
      className={classNames(
        'mosuk-textarea-skeleton',
        styles.textarea,
        rest?.className,
      )}
    />
  );
}
