'use client';

import { StepperTitleProps } from '@/components/navigation/stepper/.partials/components/title/component.interface';
import { useStepper } from '@/components/navigation/stepper/.partials/hooks/hook';
import styles from '@/components/navigation/stepper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function StepperTitle({
  children,
  className,
  ...rest
}: StepperTitleProps) {
  const { size } = useStepper();

  return (
    <span
      {...rest}
      data-size={size}
      className={classNames('mosuk-stepper-title', styles.title, className)}
    >
      {children}
    </span>
  );
}
