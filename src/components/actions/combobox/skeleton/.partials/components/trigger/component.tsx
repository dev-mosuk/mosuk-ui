import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxTriggerSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/trigger/component.interface';
import { Skeleton } from '@/components/display/skeleton/component/component';
import classNames from 'classnames';
import React from 'react';

export function ComboboxTriggerSkeleton({
  ...rest
}: ComboboxTriggerSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-combobox-trigger-skeleton',
        styles.trigger,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
