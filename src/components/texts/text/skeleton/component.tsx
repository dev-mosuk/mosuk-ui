import { Skeleton } from '@/components/display/skeleton/component/component';
import { TextSkeletonProps } from '@/components/texts/text/skeleton/component.interface';
import styles from '@/components/texts/text/skeleton/component.module.css';
import React from 'react';

export function TextSkeleton({ length, ...props }: TextSkeletonProps) {
  return (
    <div
      {...props}
      className={`mosuk-text-skeleton ${styles['text']} ${props?.className ?? ''}`}
    >
      {Array.from({ length: length ?? 3 }).map((_, index: number) => (
        <Skeleton key={index} className={styles['text-line']} />
      ))}
    </div>
  );
}
