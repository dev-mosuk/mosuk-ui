import React from 'react';
import { IconSkeleton } from '../../../../atoms/icons/icon/skeleton/index';
import { H3Skeleton } from '../../../../atoms/texts/h3/skeleton/index';
import {
  AccordionSkeletonHeaderContentProps,
  AccordionSkeletonHeaderIconProps,
  AccordionSkeletonHeaderProps,
  AccordionSkeletonItemProps,
  AccordionSkeletonProps,
} from './component.interface';
import styles from './component.module.css';

export function AccordionSkeleton({ ...props }: AccordionSkeletonProps) {
  return (
    <div
      {...props}
      className={`mosuk-accordion-skeleton ${styles.accordion} ${props.className ?? ''}`}
    >
      {props?.children}
    </div>
  );
}

export function AccordionSkeletonItem({ ...props }: AccordionSkeletonItemProps) {
  return (
    <div {...props} className={`${styles.item} ${props.className ?? ''}`}>
      {props?.children}
    </div>
  );
}

export function AccordionSkeletonHeader({ ...props }: AccordionSkeletonHeaderProps) {
  return (
    <div {...props} className={`${styles.header} ${props.className ?? ''}`}>
      {props?.children}
    </div>
  );
}

export function AccordionSkeletonHeaderContent({ ...props }: AccordionSkeletonHeaderContentProps) {
  return (
    <H3Skeleton {...props}>
      <H3Skeleton.Text />
    </H3Skeleton>
  );
}

export function AccordionSkeletonHeaderIcon({ ...props }: AccordionSkeletonHeaderIconProps) {
  return <IconSkeleton {...props} />;
}
