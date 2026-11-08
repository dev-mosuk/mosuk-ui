import type {
  UseStepperProps,
  UseStepperStepProps,
} from '@/components/navigation/stepper/component/.partials/hooks/hook.interface';
import {
  StepperContext,
  StepperStepContext,
} from '@/components/navigation/stepper/component/.partials/providers/context/context';
import { useContext } from 'react';

export function useStepper(): UseStepperProps {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('useStepper must be used within Stepper');
  }

  return context;
}

export function useStepperStep(): UseStepperStepProps {
  const context = useContext(StepperStepContext);

  if (!context) {
    throw new Error('useStepperStep must be used within Stepper.Step');
  }

  return context;
}
