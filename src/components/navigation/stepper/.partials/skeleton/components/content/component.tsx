import styles from '@/components/navigation/stepper/.partials/styles/component.module.css';
import { StepperContentSkeletonProps } from '@/components/navigation/stepper/.partials/skeleton/components/content/component.interface';
import classNames from 'classnames';
import React from 'react';

export function StepperContentSkeleton({
  children,
  className,
  ...rest
}: StepperContentSkeletonProps) {
  return (
    <span
      {...rest}
      className={classNames(
        'mosuk-stepper-content-skeleton',
        styles.content,
        styles.contentHorizontal,
        className,
      )}
    >
      {children}
    </span>
  );
}
