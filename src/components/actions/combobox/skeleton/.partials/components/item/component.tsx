import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxItemSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/item/component.interface';
import { Skeleton } from '@/components/display/skeleton/component/component';
import classNames from 'classnames';
import React from 'react';

export function ComboboxItemSkeleton({ ...rest }: ComboboxItemSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-combobox-item-skeleton',
        styles.item,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
