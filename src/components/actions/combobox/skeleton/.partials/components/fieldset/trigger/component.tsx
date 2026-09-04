import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxFieldsetTriggerSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/trigger/component.interface';
import { Skeleton } from '@/components/core/skeleton/component/component';
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
