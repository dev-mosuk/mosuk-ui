import {
  ImagesSkeletonImageProps,
  ImagesSkeletonProps,
} from '@/components/display/file/(files)/skeleton/component.interface';
import styles from '@/components/display/file/(files)/skeleton/component.module.css';
import { Image as ImageIcon } from 'lucide-react';
import React from 'react';

export function ImagesSkeleton({ ...props }: ImagesSkeletonProps) {
  return (
    <div
      {...props}
      className={`mosuk-image-skeleton ${styles.image} ${props?.className ?? ''}`}
    >
      {props?.children}
    </div>
  );
}

export function ImagesSkeletonImage({ ...props }: ImagesSkeletonImageProps) {
  return (
    <ImageIcon
      {...props}
      ref={props?.ref}
      className={`${styles.icon} ${props?.className ?? ''}`}
    />
  );
}
