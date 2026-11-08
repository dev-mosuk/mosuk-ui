import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import { StepperSkeletonProps } from '@/components/navigation/stepper/skeleton/.partials/components/component.interface';
import classNames from 'classnames';
import React from 'react';

export function StepperSkeleton({
  orientation = 'horizontal',
  size = 'md',
  children,
  className,
  ...rest
}: StepperSkeletonProps) {
  return (
    <div
      {...rest}
      data-orientation={orientation}
      data-size={size}
      className={classNames('mosuk-stepper-skeleton', styles.root, className)}
    >
      {children}
    </div>
  );
}
