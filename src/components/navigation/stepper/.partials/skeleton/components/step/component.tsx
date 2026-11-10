import styles from '@/components/navigation/stepper/.partials/styles/component.module.css';
import { StepperStepSkeletonProps } from '@/components/navigation/stepper/.partials/skeleton/components/step/component.interface';
import classNames from 'classnames';
import React from 'react';

export function StepperStepSkeleton({
  children,
  className,
  ...rest
}: StepperStepSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-stepper-step-skeleton',
        styles.step,
        styles.stepHorizontal,
        className,
      )}
    >
      <div
        className={classNames(styles.stepButton, styles.stepButtonHorizontal)}
      >
        {children}
      </div>
    </div>
  );
}
