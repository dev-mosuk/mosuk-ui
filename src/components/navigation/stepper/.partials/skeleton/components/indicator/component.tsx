import styles from '@/components/navigation/stepper/.partials/styles/component.module.css';
import { StepperIndicatorSkeletonProps } from '@/components/navigation/stepper/.partials/skeleton/components/indicator/component.interface';
import classNames from 'classnames';
import React from 'react';

export function StepperIndicatorSkeleton({
  className,
  ...rest
}: StepperIndicatorSkeletonProps) {
  return (
    <span
      {...rest}
      data-size="md"
      className={classNames(
        'mosuk-stepper-indicator-skeleton',
        styles.indicator,
        className,
      )}
    />
  );
}
