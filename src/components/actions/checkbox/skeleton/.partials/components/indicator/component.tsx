import classNames from 'classnames';
import React from 'react';
import styles from '../../../../component/.partials/styles/component.module.css';
import { CheckboxIndicatorSkeletonProps } from './component.interface';

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
