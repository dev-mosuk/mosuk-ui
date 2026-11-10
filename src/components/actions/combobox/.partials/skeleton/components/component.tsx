import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { ComboboxSkeletonProps } from '@/components/actions/combobox/.partials/skeleton/components/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxSkeleton({ ...rest }: ComboboxSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-skeleton',
        styles.root,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
