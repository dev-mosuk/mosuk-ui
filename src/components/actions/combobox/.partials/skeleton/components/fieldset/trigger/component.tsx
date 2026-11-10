import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { ComboboxFieldsetTriggerSkeletonProps } from '@/components/actions/combobox/.partials/skeleton/components/fieldset/trigger/component.interface';
import { Skeleton } from '@/components/core/skeleton/component';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetTriggerSkeleton({
  ...rest
}: ComboboxFieldsetTriggerSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-combobox-fieldset-trigger-skeleton',
        styles.ComboboxFieldsetTrigger,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
