'use client';

import { StepperSeparatorProps } from '@/components/navigation/stepper/component/.partials/components/separator/component.interface';
import {
  useStepper,
  useStepperStep,
} from '@/components/navigation/stepper/component/.partials/hooks/hook';
import styles from '@/components/navigation/stepper/component/.partials/styles/component.module.css';
import { STEPPER_SEPARATOR_PART } from '@/components/navigation/stepper/component/.partials/utilities/parts';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React from 'react';

export function StepperSeparator({
  progress: progressProp,
  force = false,
  className,
  style,
  ...rest
}: StepperSeparatorProps) {
  const { orientation, currentStep } = useStepper();
  const { index, status, isLast } = useStepperStep();

  if (isLast && !force) {
    return null;
  }

  const progress =
    progressProp !== undefined
      ? Math.min(1, Math.max(0, progressProp))
      : currentStep > index
        ? 1
        : 0;

  const isComplete = progress >= 1;

  return (
    <div
      {...rest}
      data-orientation={orientation}
      data-status={status}
      aria-hidden='true'
      className={classNames(
        'mosuk-stepper-separator',
        styles.separator,
        orientation === 'vertical'
          ? styles.separatorVertical
          : styles.separatorHorizontal,
        className,
      )}
      style={
        {
          ...style,
          '--stepper-separator-progress': String(progress),
        } as CSSProperties
      }
    >
      <div
        data-complete={isComplete ? 'true' : undefined}
        data-orientation={orientation}
        className={classNames(
          styles.separatorTrack,
          orientation === 'vertical'
            ? styles.separatorTrackVertical
            : styles.separatorTrackHorizontal,
        )}
      >
        <div
          data-orientation={orientation}
          className={classNames(
            styles.separatorFill,
            orientation === 'vertical'
              ? styles.separatorFillVertical
              : styles.separatorFillHorizontal,
          )}
        />
      </div>
    </div>
  );
}

Object.assign(StepperSeparator, { mosukPart: STEPPER_SEPARATOR_PART });
