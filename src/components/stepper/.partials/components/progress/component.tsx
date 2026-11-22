'use client';

import { StepperProgressProps } from '@/components/stepper/.partials/components/progress/component.interface';
import {
  useStepper,
  useStepperStep,
} from '@/components/stepper/.partials/hooks/hook';
import styles from '@/components/stepper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function StepperProgress<C = 'figure'>({
  as,
  ref,
  progress: progressProp,
  stroke,
  className,
  style,
  ...rest
}: StepperProgressProps<C>) {
  const { step, orientation } = useStepper();
  const { index } = useStepperStep();
  const Component = (as ?? 'figure') as ElementType;

  const progress =
    progressProp !== undefined
      ? Math.min(1, Math.max(0, progressProp))
      : step > index
        ? 1
        : 0;

  return (
    <Component
      {...rest}
      ref={ref}
      aria-hidden='true'
      data-stroke={stroke}
      className={classNames(
        'mosuk-stepper-progress',
        styles.progress,
        className,
      )}
      style={
        {
          '--stepper-stroke': stroke,
          ...style,
        } as CSSProperties
      }
    >
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{
            transform:
              orientation === 'vertical'
                ? `scaleY(${progress})`
                : `scaleX(${progress})`,
          }}
        />
      </div>
    </Component>
  );
}
