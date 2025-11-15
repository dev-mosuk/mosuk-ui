import { Video } from 'lucide-react';
import React from 'react';
import { VideoSkeletonProps, VideoSkeletonVideoProps } from './component.interface';
import styles from './component.module.css';

export function VideoSkeleton({ ...props }: VideoSkeletonProps) {
  return (
    <div {...props} className={`mosuk-video ${styles.video} ${props?.className ?? ''}`}>
      {props?.children}
    </div>
  );
}

export function VideoSkeletonVideo({ ...props }: VideoSkeletonVideoProps) {
  return <Video {...props} />;
}
