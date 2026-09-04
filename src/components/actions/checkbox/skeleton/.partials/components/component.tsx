import styles from '@/components/actions/checkbox/component/.partials/styles/component.module.css';
import { CheckboxSkeletonProps } from '@/components/actions/checkbox/skeleton/.partials/components/component.interface';
import { Skeleton } from '@/components/core/skeleton/component/component';
import classNames from 'classnames';
import React from 'react';

export function CheckboxSkeleton({ ...rest }: CheckboxSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-checkbox-skeleton',
        styles.checkbox,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
