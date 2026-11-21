import {
  VideoProps,
  VideoVideoProps,
} from '@/components/display/video/component.interface';
import styles from '@/components/display/video/component.module.css';
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
