import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxFieldsetInputSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/input/component.interface';
import { Skeleton } from '@/components/display/skeleton/component/component';
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
