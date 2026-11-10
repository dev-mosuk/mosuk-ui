import {
  VideoSkeletonProps,
  VideoSkeletonVideoProps,
} from '@/components/display/video/.partials/skeleton/component.interface';
import styles from '@/components/display/video/.partials/skeleton/component.module.css';
import { Video } from 'lucide-react';
import React from 'react';

export function VideoSkeleton({ ...props }: VideoSkeletonProps) {
  return (
    <div
      {...props}
      className={`mosuk-video ${styles.video} ${props?.className ?? ''}`}
    >
      {props?.children}
    </div>
  );
}

export function VideoSkeletonVideo({ ...props }: VideoSkeletonVideoProps) {
  return <Video {...props} />;
}
