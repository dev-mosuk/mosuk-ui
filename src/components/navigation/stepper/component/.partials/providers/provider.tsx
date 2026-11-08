'use client';

import {
  StepperContext,
  StepperStepContext,
} from '@/components/navigation/stepper/component/.partials/providers/context/context';
import type {
  StepperProviderProps,
  StepperStepProviderProps,
} from '@/components/navigation/stepper/component/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function StepperProvider({
  children,
  currentStep,
  onStepChange,
  orientation,
  size,
  isClickable,
  stepCount,
}: StepperProviderProps) {
  const value = useMemo(
    () => ({
      currentStep,
      onStepChange,
      orientation,
      size,
      isClickable,
      stepCount,
    }),
    [currentStep, onStepChange, orientation, size, isClickable, stepCount],
  );

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}

export function StepperStepProvider({
  children,
  index,
  status,
  isLast,
}: StepperStepProviderProps) {
  const value = useMemo(
    () => ({
      index,
      status,
      isLast,
    }),
    [index, status, isLast],
  );

  return (
    <StepperStepContext.Provider value={value}>
      {children}
    </StepperStepContext.Provider>
  );
}
