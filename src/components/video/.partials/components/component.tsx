import type { VideoProps } from '@/components/video/.partials/components/component.interface';
import styles from '@/components/video/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function Video({ className, children, ...rest }: VideoProps) {
  return (
    <video
      {...rest}
      className={classNames(
        'mosuk-video',
        '@container/video',
        'group/video',
        styles.video,
        className,
      )}
    >
      {children}
    </video>
  );
}
