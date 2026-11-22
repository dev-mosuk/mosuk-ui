'use client';

import {
  StepperContext,
  StepperStepContext,
} from '@/components/stepper/.partials/providers/context/context';
import type {
  StepperProviderProps,
  StepperStepProviderProps,
} from '@/components/stepper/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function StepperProvider({
  children,
  step,
  onStepChange,
  orientation,
  size,
  isClickable,
  stepCount,
}: StepperProviderProps) {
  const value = useMemo(
    () => ({
      step,
      onStepChange,
      orientation,
      size,
      isClickable,
      stepCount,
    }),
    [step, onStepChange, orientation, size, isClickable, stepCount],
  );

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}

export function StepperStepProvider({
  children,
  index,
  status,
}: StepperStepProviderProps) {
  const value = useMemo(
    () => ({
      index,
      status,
    }),
    [index, status],
  );

  return (
    <StepperStepContext.Provider value={value}>
      {children}
    </StepperStepContext.Provider>
  );
}
