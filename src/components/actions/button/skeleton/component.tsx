import styles from '@/components/actions/button/component/component.module.css';
import { ButtonSkeletonProps } from '@/components/actions/button/skeleton/component.interface';
import { Skeleton } from '@/components/core/skeleton/component/component';
import classNames from 'classnames';
import React from 'react';

export function ButtonSkeleton({ ...rest }: ButtonSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-button-skeleton',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
