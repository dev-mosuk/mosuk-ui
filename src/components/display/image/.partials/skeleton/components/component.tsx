import styles from '@/components/display/image/.partials/styles/component.module.css';
import { ImageSkeletonProps } from '@/components/display/image/.partials/skeleton/components/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ImageSkeleton({ ...rest }: ImageSkeletonProps) {
  return (
    <div
      {...rest}
      aria-busy="true"
      className={classNames(
        'mosuk-image-skeleton',
        styles.image,
        rest?.className,
      )}
    >
      <div
        aria-hidden
        className={classNames(
          'mosuk-image-skeleton-dots',
          styles.dots,
          styles.canvas,
        )}
      />
      {rest?.children}
    </div>
  );
}
