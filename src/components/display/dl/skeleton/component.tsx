import React, { ReactNode } from 'react';
import { Skeleton } from '../../skeleton/component/component';
import {
  DlSkeletonDdProps,
  DlSkeletonDlProps,
  DlSkeletonDtProps,
  DlSkeletonProps,
} from './component.interface';
import styles from './component.module.css';

interface DlProps {
  children: ReactNode;
  className?: string;
}

export function DlSkeletonDl({ ...props }: DlSkeletonDlProps) {
  return (
    <dl {...props} className={`${styles.dl} ${props?.className}`}>
      {props?.children}
    </dl>
  );
}

export function DlSkeletonDt({ ...props }: DlSkeletonDtProps) {
  return <Skeleton {...props} className={`${styles.dt} ${props?.className}`} />;
}

export function DlSkeletonDd({ ...props }: DlSkeletonDdProps) {
  return <Skeleton {...props} className={`${styles.dd} ${props?.className}`} />;
}

export function DlSkeleton({ ...props }: DlSkeletonProps) {
  return (
    <div {...props} className={`mosuk-list-dl ${styles.list} ${props?.className ?? ''}`}>
      {props?.children}
    </div>
  );
}
