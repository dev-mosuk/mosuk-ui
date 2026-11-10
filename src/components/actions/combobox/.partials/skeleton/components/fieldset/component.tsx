import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { ComboboxFieldsetSkeletonProps } from '@/components/actions/combobox/.partials/skeleton/components/fieldset/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetSkeleton({
  ...rest
}: ComboboxFieldsetSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-fieldset-skeleton',
        styles.ComboboxFieldset,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
