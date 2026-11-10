'use client';

import { StepperIconProps } from '@/components/navigation/stepper/.partials/components/icon/component.interface';
import styles from '@/components/navigation/stepper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function StepperIcon({
  children,
  className,
  ...rest
}: StepperIconProps) {
  return (
    <span
      {...rest}
      className={classNames('mosuk-stepper-icon', styles.icon, className)}
    >
      {children}
    </span>
  );
}
