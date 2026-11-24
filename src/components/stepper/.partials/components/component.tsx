'use client';

import { StepperProps } from '@/components/stepper/.partials/components/component.interface';
import { StepperProgress } from '@/components/stepper/.partials/components/progress/component';
import { StepperStep } from '@/components/stepper/.partials/components/step/component';
import {
  STEPPER_CHAIN_EASE,
  STEPPER_CHAIN_LANDING,
  STEPPER_DEFAULT_ORIENTATION,
  STEPPER_DEFAULT_SIZE,
  STEPPER_DEFAULT_STEP,
  STEPPER_DEFAULT_STROKE,
  STEPPER_DEFAULT_VARIANT,
  STEPPER_EASE,
  STEPPER_LINE_DURATION,
  STEPPER_STEP_DELAY,
  STEPPER_STEP_DURATION,
} from '@/components/stepper/.partials/constants/component.constants';
import { useScroll } from '@/components/stepper/.partials/hooks/scroll';
import type { StepperStepStatus } from '@/components/stepper/.partials/providers/context/context.interface';
import {
  StepperProvider,
  StepperStepProvider,
} from '@/components/stepper/.partials/providers/provider';
import styles from '@/components/stepper/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react';

function hopTiming(distance: number, hopIndex: number) {
  if (distance <= 1) {
    return {
      line: STEPPER_LINE_DURATION,
      delay: STEPPER_STEP_DELAY,
      duration: STEPPER_STEP_DURATION,
      hop: STEPPER_STEP_DELAY + STEPPER_STEP_DURATION,
      ease: STEPPER_EASE,
    };
  }

  const index = Math.min(Math.max(hopIndex, 0), distance - 1);
  const span = Math.max(
    48,
    Math.round((STEPPER_CHAIN_LANDING * (index + 1)) / distance),
  );
  const delay = Math.round(span * 0.35);

  return {
    line: span,
    delay,
    duration: Math.max(span - delay, 1),
    hop: span,
    ease: index === distance - 1 ? STEPPER_EASE : STEPPER_CHAIN_EASE,
  };
}

function resolveStatus(
  index: number,
  step: number,
  stepCount: number,
): StepperStepStatus {
  if (index < step) {
    return 'complete';
  }

  if (index === step) {
    if (stepCount > 0 && step >= stepCount - 1) {
      return 'complete';
    }

    return 'active';
  }

  return 'inactive';
}

export function Stepper({
  size = STEPPER_DEFAULT_SIZE,
  stroke = STEPPER_DEFAULT_STROKE,
  variant = STEPPER_DEFAULT_VARIANT,
  orientation = STEPPER_DEFAULT_ORIENTATION,
  step: controlledStep,
  defaultStep = STEPPER_DEFAULT_STEP,
  onStepChange,
  children,
  className,
  style,
  ...rest
}: StepperProps) {
  const [uncontrolledStep, setUncontrolledStep] = useState(defaultStep);
  const isControlled = controlledStep !== undefined;
  const step = isControlled ? controlledStep : uncontrolledStep;
  const [playedStep, setPlayedStep] = useState(step);
  const targetRef = useRef(step);
  const jumpOriginRef = useRef(step);
  const jumpFromRef = useRef<number | null>(null);
  const isClickable = typeof onStepChange === 'function';
  const {
    ref: trackRef,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onClickCapture,
  } = useScroll(orientation === 'vertical' ? 'y' : 'x');

  if (targetRef.current !== step) {
    jumpOriginRef.current = playedStep;
    jumpFromRef.current = null;
    targetRef.current = step;
  }

  const distance = Math.abs(step - jumpOriginRef.current);
  const traveled = Math.abs(playedStep - jumpOriginRef.current);
  const timing = hopTiming(distance, Math.max(traveled - 1, 0));

  useEffect(() => {
    if (targetRef.current !== step) {
      targetRef.current = step;
      jumpFromRef.current = null;
    }

    if (playedStep === step) {
      jumpFromRef.current = null;

      return;
    }

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced) {
      jumpFromRef.current = null;
      setPlayedStep(step);

      return;
    }

    if (jumpFromRef.current === null) {
      jumpFromRef.current = playedStep;
    }

    const delay = playedStep === jumpFromRef.current ? 0 : timing.hop;
    const timeout = window.setTimeout(() => {
      setPlayedStep((current) => {
        if (current === step) {
          return current;
        }

        return current + Math.sign(step - current);
      });
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [playedStep, step, timing.hop]);

  const handleStepChange = useCallback(
    (nextStep: number) => {
      if (!isControlled) {
        setUncontrolledStep(nextStep);
      }

      onStepChange?.(nextStep);
    },
    [isControlled, onStepChange],
  );

  const elements = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement[];
  const stepCount = elements.filter(
    (child) => child.type === StepperStep,
  ).length;

  let stepIndex = -1;

  const items: ReactNode[] = elements.map((child, position) => {
    const isStep = child.type === StepperStep;
    const isProgress = child.type === StepperProgress;

    if (!isStep && !isProgress) {
      return child;
    }

    if (isStep) {
      stepIndex += 1;
    }

    const index = Math.max(stepIndex, 0);
    const props = child.props as { stroke?: number };

    return (
      <StepperStepProvider
        key={child.key ?? position}
        index={index}
        status={resolveStatus(index, playedStep, stepCount)}
      >
        {cloneElement(child as ReactElement<{ stroke?: number }>, {
          stroke: props.stroke ?? stroke,
        })}
      </StepperStepProvider>
    );
  });

  return (
    <StepperProvider
      step={playedStep}
      onStepChange={isClickable ? handleStepChange : undefined}
      orientation={orientation}
      size={size}
      isClickable={isClickable}
      stepCount={stepCount}
    >
      <div
        {...rest}
        data-variant={variant}
        data-orientation={orientation}
        data-size={size}
        data-stroke={stroke}
        style={
          {
            '--stepper-size': size,
            '--stepper-stroke': stroke,
            '--stepper-duration-line': `${timing.line}ms`,
            '--stepper-duration-step': `${timing.duration}ms`,
            '--stepper-duration-delay': `${timing.delay}ms`,
            '--stepper-ease': timing.ease,
            ...style,
          } as CSSProperties
        }
        className={classNames(
          'mosuk-stepper',
          '@container/stepper',
          'group/stepper',
          styles.stepper,
          className,
        )}
      >
        <div
          ref={trackRef}
          data-dragging={isDragging || undefined}
          className={styles.track}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onClickCapture={onClickCapture}
        >
          {items}
        </div>
      </div>
    </StepperProvider>
  );
}
