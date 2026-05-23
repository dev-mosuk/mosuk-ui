import { IconSkeleton } from '@/components/actions/icon/skeleton/component';
import {
  AccordionSkeletonHeaderContentProps,
  AccordionSkeletonHeaderIconProps,
  AccordionSkeletonHeaderProps,
  AccordionSkeletonItemProps,
  AccordionSkeletonProps,
} from '@/components/collections/accordion/skeleton/component.interface';
import styles from '@/components/collections/accordion/skeleton/component.module.css';
import { H3Skeleton } from '@/components/texts/h3/skeleton/component';
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
  return <H3Skeleton {...props} />;
}

export function AccordionSkeletonHeaderIcon({
  ...props
}: AccordionSkeletonHeaderIconProps) {
  return <IconSkeleton {...props} />;
}
