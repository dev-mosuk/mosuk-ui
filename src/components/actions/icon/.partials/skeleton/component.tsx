import styles from '@/components/actions/icon/component.module.css';
import { IconSkeletonProps } from '@/components/actions/icon/.partials/skeleton/component.interface';
import { Skeleton } from '@/components/core/skeleton/component';
import classNames from 'classnames';
import React from 'react';

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
