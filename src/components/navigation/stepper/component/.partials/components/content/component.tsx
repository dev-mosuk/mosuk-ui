'use client';

import { StepperContentProps } from '@/components/navigation/stepper/component/.partials/components/content/component.interface';
import { useStepper } from '@/components/navigation/stepper/component/.partials/hooks/hook';
import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function StepperContent({
  children,
  className,
  ...rest
}: StepperContentProps) {
  const { orientation } = useStepper();

  return (
    <span
      {...rest}
      data-orientation={orientation}
      className={classNames(
        'mosuk-stepper-content',
        styles.content,
        orientation === 'vertical'
          ? styles.contentVertical
          : styles.contentHorizontal,
        className,
      )}
    >
      {children}
    </span>
  );
}
