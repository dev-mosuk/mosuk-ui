'use client';

import { StepperProps } from '@/components/navigation/stepper/component/.partials/components/component.interface';
import type { StepperStepStatus } from '@/components/navigation/stepper/component/.partials/providers/context/context.interface';
import {
  StepperProvider,
  StepperStepProvider,
} from '@/components/navigation/stepper/component/.partials/providers/provider';
import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  isValidElement,
  useCallback,
  useState,
  type ReactElement,
} from 'react';

function resolveStatus(index: number, currentStep: number): StepperStepStatus {
  if (index < currentStep) {
    return 'complete';
  }

  if (index === currentStep) {
    return 'active';
  }

  return 'inactive';
}

export function Stepper({
  orientation = 'horizontal',
  size = 'md',
  currentStep: controlledStep,
  defaultStep = 0,
  onStepChange,
  children,
  className,
  ...rest
}: StepperProps) {
  const [uncontrolledStep, setUncontrolledStep] = useState(defaultStep);
  const isControlled = controlledStep !== undefined;
  const currentStep = isControlled ? controlledStep : uncontrolledStep;
  const isClickable = typeof onStepChange === 'function';

  const handleStepChange = useCallback(
    (step: number) => {
      if (!isControlled) {
        setUncontrolledStep(step);
      }

      onStepChange?.(step);
    },
    [isControlled, onStepChange],
  );

  const steps = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement[];
  const stepCount = steps.length;

  return (
    <StepperProvider
      currentStep={currentStep}
      onStepChange={isClickable ? handleStepChange : undefined}
      orientation={orientation}
      size={size}
      isClickable={isClickable}
      stepCount={stepCount}
    >
      <ol
        {...rest}
        data-orientation={orientation}
        data-size={size}
        className={classNames('mosuk-stepper', styles.root, className)}
      >
        {steps.map((child, index) => (
          <StepperStepProvider
            key={child.key ?? index}
            index={index}
            status={resolveStatus(index, currentStep)}
            isLast={index === stepCount - 1}
          >
            {child}
          </StepperStepProvider>
        ))}
      </ol>
    </StepperProvider>
  );
}
