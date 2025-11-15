import { Image as ImageIcon } from 'lucide-react';
import React from 'react';
import { ImagesSkeletonImageProps, ImagesSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function ImagesSkeleton({ ...props }: ImagesSkeletonProps) {
  return (
    <div {...props} className={`mosuk-image-skeleton ${styles.image} ${props?.className ?? ''}`}>
      {props?.children}
    </div>
  );
}

export function ImagesSkeletonImage({ ...props }: ImagesSkeletonImageProps) {
  return <ImageIcon {...props} ref={props?.ref} className={`${styles.icon} ${props?.className ?? ''}`} />;
}
