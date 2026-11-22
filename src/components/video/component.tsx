import {
  VideoProps,
  VideoVideoProps,
} from '@/components/video/component.interface';
import styles from '@/components/video/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function Video({ ...props }: VideoProps) {
  return (
    <div
      {...props}
      className={classNames(
        'mosuk-video',
        '@container/video',
        'group/video',
        styles.video,
        props?.className,
      )}
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
