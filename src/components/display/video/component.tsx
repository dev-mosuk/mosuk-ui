import {
  VideoProps,
  VideoVideoProps,
} from '@/components/display/video/component.interface';
import styles from '@/components/display/video/component.module.css';
import React from 'react';

export function Video({ ...props }: VideoProps) {
  return (
    <div
      {...props}
      className={`mosuk-video ${styles.video} ${props?.className ?? ''}`}
    >
      {props?.children}
    </div>
  );
}

export function VideoVideo({ ...props }: VideoVideoProps) {
  return (
    <video {...props} className={`${styles.player} ${props?.className ?? ''}`}>
      {props?.children}
    </video>
  );
}
