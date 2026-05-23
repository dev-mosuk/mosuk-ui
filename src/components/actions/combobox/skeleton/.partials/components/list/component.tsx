import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxListSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/list/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxListSkeleton({ ...rest }: ComboboxListSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-list-skeleton',
        styles.list,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
