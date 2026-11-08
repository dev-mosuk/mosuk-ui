'use client';

import { StepperDescriptionProps } from '@/components/navigation/stepper/component/.partials/components/description/component.interface';
import { useStepper } from '@/components/navigation/stepper/component/.partials/hooks/hook';
import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function StepperDescription({
  children,
  className,
  ...rest
}: StepperDescriptionProps) {
  const { size } = useStepper();

  return (
    <span
      {...rest}
      data-size={size}
      className={classNames(
        'mosuk-stepper-description',
        styles.description,
        className,
      )}
    >
      {children}
    </span>
  );
}
