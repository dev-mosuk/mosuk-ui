import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import styles from './../component/component.module.css';
import { IconSkeletonProps } from './component.interface';

export function IconSkeleton({ ...rest }: IconSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-icon-skeleton',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
