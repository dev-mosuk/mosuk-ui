'use client';

import { StepperContentProps } from '@/components/stepper/.partials/components/content/component.interface';
import { useStepper } from '@/components/stepper/.partials/hooks/hook';
import styles from '@/components/stepper/.partials/styles/component.module.css';
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
