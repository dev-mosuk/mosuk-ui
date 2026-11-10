import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { ComboboxFieldsetInputSkeletonProps } from '@/components/actions/combobox/.partials/skeleton/components/fieldset/input/component.interface';
import { Skeleton } from '@/components/core/skeleton/component';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetInputSkeleton({
  ...rest
}: ComboboxFieldsetInputSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-combobox-fieldset-input-skeleton',
        styles.ComboboxFieldsetInput,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
