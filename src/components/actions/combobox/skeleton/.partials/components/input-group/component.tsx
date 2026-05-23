import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxInputGroupSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/input-group/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxInputGroupSkeleton({
  ...rest
}: ComboboxInputGroupSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-input-group-skeleton',
        styles.inputGroup,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
