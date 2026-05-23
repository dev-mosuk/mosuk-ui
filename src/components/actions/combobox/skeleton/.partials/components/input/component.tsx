import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxInputSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/input/component.interface';
import { Skeleton } from '@/components/display/skeleton/component/component';
import classNames from 'classnames';
import React from 'react';

export function ComboboxInputSkeleton({ ...rest }: ComboboxInputSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-combobox-input-skeleton',
        styles.input,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
