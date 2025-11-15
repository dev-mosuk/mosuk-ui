import React from 'react';
import { VideoProps, VideoVideoProps } from './component.interface';
import styles from './component.module.css';

export function Video({ ...props }: VideoProps) {
  return (
    <div {...props} className={`mosuk-video ${styles.video} ${props?.className ?? ''}`}>
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
