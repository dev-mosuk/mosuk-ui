import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { IconSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function IconSkeleton({ ...rest }: IconSkeletonProps) {
  return (
    <Skeleton {...rest} className={classNames('mosuk-icon-skeleton', styles.icon, rest?.className)}>
      {rest?.children}
    </Skeleton>
  );
}
