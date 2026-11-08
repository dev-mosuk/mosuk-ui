import type {
  StepperContextProps,
  StepperStepContextProps,
} from '@/components/navigation/stepper/component/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const StepperContext = createContext<StepperContextProps | null>(null);

export const StepperStepContext = createContext<StepperStepContextProps | null>(
  null,
);
