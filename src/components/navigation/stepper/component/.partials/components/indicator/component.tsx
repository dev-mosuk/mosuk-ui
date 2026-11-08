'use client';

import { StepperIndicatorProps } from '@/components/navigation/stepper/component/.partials/components/indicator/component.interface';
import {
  useStepper,
  useStepperStep,
} from '@/components/navigation/stepper/component/.partials/hooks/hook';
import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function StepperIndicator({
  children,
  className,
  ...rest
}: StepperIndicatorProps) {
  const { size, orientation } = useStepper();
  const { index, status } = useStepperStep();

  return (
    <span
      {...rest}
      data-status={status}
      data-size={size}
      data-orientation={orientation}
      className={classNames(
        'mosuk-stepper-indicator',
        styles.indicator,
        className,
      )}
    >
      {children ??
        (status === 'complete' ? (
          <svg
            className={styles.check}
            viewBox='0 0 24 24'
            fill='none'
            aria-hidden='true'
          >
            <path
              className={styles.checkPath}
              d='M5 13l4 4L19 7'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        ) : (
          <span className={styles.indicatorNumber}>{index + 1}</span>
        ))}
    </span>
  );
}
