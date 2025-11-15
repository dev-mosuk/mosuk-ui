import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../skeleton/component/component';
import { ImageSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function ImageSkeleton({ ...rest }: ImageSkeletonProps) {
  return (
    <Skeleton {...rest} className={classNames('mosuk-image', styles.image, rest?.className)}>
      {rest?.children}
    </Skeleton>
  );
}
