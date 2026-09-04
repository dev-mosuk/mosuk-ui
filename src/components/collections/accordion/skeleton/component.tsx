import { IconSkeleton } from '@/components/actions/icon/skeleton/component';
import {
  AccordionSkeletonHeaderContentProps,
  AccordionSkeletonHeaderIconProps,
  AccordionSkeletonHeaderProps,
  AccordionSkeletonItemProps,
  AccordionSkeletonProps,
} from '@/components/collections/accordion/skeleton/component.interface';
import styles from '@/components/collections/accordion/skeleton/component.module.css';
import { Skeleton } from '@/components/core/skeleton/component/component';
import React from 'react';

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

export function AccordionSkeletonItem({
  ...props
}: AccordionSkeletonItemProps) {
  return (
    <div {...props} className={`${styles.item} ${props.className ?? ''}`}>
      {props?.children}
    </div>
  );
}

export function AccordionSkeletonHeader({
  ...props
}: AccordionSkeletonHeaderProps) {
  return (
    <div {...props} className={`${styles.header} ${props.className ?? ''}`}>
      {props?.children}
    </div>
  );
}

export function AccordionSkeletonHeaderContent({
  ...props
}: AccordionSkeletonHeaderContentProps) {
  return (
    <Skeleton
      as="h3"
      {...props}
      className={`${styles.headerContent} ${props.className ?? ''}`}
    />
  );
}

export function AccordionSkeletonHeaderIcon({
  ...props
}: AccordionSkeletonHeaderIconProps) {
  return <IconSkeleton {...props} />;
}
