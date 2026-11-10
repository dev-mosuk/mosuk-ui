import type {
  StepperContextProps,
  StepperStepContextProps,
} from '@/components/navigation/stepper/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface StepperProviderProps extends StepperContextProps {
  children?: ReactNode;
}

export interface StepperStepProviderProps extends StepperStepContextProps {
  children?: ReactNode;
}
