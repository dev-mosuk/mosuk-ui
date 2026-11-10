import styles from '@/components/actions/checkbox/.partials/styles/component.module.css';
import { CheckboxSkeletonProps } from '@/components/actions/checkbox/.partials/skeleton/components/component.interface';
import { Skeleton } from '@/components/core/skeleton/component';
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
