import styles from '@/components/actions/checkbox/component/.partials/styles/component.module.css';
import { CheckboxIndicatorSkeletonProps } from '@/components/actions/checkbox/skeleton/.partials/components/indicator/component.interface';
import classNames from 'classnames';
import React from 'react';

export function CheckboxIndicatorSkeleton({
  ...rest
}: CheckboxIndicatorSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-checkbox-indicator-skeleton',
        styles.indicator,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
