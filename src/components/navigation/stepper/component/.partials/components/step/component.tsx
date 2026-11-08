'use client';

import { StepperStepProps } from '@/components/navigation/stepper/component/.partials/components/step/component.interface';
import {
  useStepper,
  useStepperStep,
} from '@/components/navigation/stepper/component/.partials/hooks/hook';
import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import { STEPPER_SEPARATOR_PART } from '@/components/navigation/stepper/component/.partials/utilities/parts';
import classNames from 'classnames';
import React, {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

function isSeparatorElement(child: ReactNode): child is ReactElement {
  if (!isValidElement(child)) {
    return false;
  }

  const type = child.type as { mosukPart?: string };

  return type?.mosukPart === STEPPER_SEPARATOR_PART;
}

export function StepperStep({
  children,
  className,
  ...rest
}: StepperStepProps) {
  const { orientation, isClickable, onStepChange, size } = useStepper();
  const { index, status } = useStepperStep();

  const childArray = Children.toArray(children);
  const separators = childArray.filter(isSeparatorElement);
  const body = childArray.filter((child) => !isSeparatorElement(child));

  const stepButtonClassName = classNames(
    styles.stepButton,
    orientation === 'vertical'
      ? styles.stepButtonVertical
      : styles.stepButtonHorizontal,
  );

  const handleClick = () => {
    if (isClickable) {
      onStepChange?.(index);
    }
  };

  return (
    <li
      {...rest}
      data-status={status}
      data-orientation={orientation}
      data-size={size}
      className={classNames(
        'mosuk-stepper-step',
        styles.step,
        orientation === 'vertical'
          ? styles.stepVertical
          : styles.stepHorizontal,
        className,
      )}
    >
      {isClickable ? (
        <button
          type='button'
          data-clickable='true'
          data-orientation={orientation}
          className={stepButtonClassName}
          onClick={handleClick}
        >
          {body}
        </button>
      ) : (
        <div
          data-clickable='false'
          data-orientation={orientation}
          className={stepButtonClassName}
        >
          {body}
        </div>
      )}
      {separators}
    </li>
  );
}
