'use client';

import { StepperStepProps } from '@/components/stepper/.partials/components/step/component.interface';
import {
  useStepper,
  useStepperStep,
} from '@/components/stepper/.partials/hooks/hook';
import styles from '@/components/stepper/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Check } from 'lucide-react';
import React, {
  type CSSProperties,
  type ElementType,
  type MouseEvent,
} from 'react';

export function StepperStep<C = 'button'>({
  as,
  ref,
  children,
  className,
  tabIndex,
  onClick,
  stroke,
  style,
  ...rest
}: StepperStepProps<C>) {
  const { isClickable, onStepChange } = useStepper();
  const { index, status } = useStepperStep();
  const Component = (as ?? 'button') as ElementType;
  const isNativeButton = (as ?? 'button') === 'button';

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isClickable) {
      return;
    }

    onStepChange?.(index);
  };

  return (
    <Component
      {...rest}
      ref={ref}
      type={isNativeButton ? 'button' : undefined}
      data-status={status}
      data-clickable={isClickable ? 'true' : undefined}
      aria-current={status === 'active' ? 'step' : undefined}
      tabIndex={isClickable ? tabIndex : -1}
      data-stroke={stroke}
      style={
        {
          '--stepper-stroke': stroke,
          ...style,
        } as CSSProperties
      }
      className={classNames('mosuk-stepper-step', styles.step, className)}
      onClick={handleClick}
    >
      {children ??
        (status === 'complete' ? (
          <Check className={styles.check} strokeWidth={2} aria-hidden='true' />
        ) : null)}
    </Component>
  );
}
