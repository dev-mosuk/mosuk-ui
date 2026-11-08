import type {
  StepperOrientation,
  StepperSize,
} from '@/components/navigation/stepper/component/.partials/providers/context/context.interface';
import type { OlHTMLAttributes, ReactNode } from 'react';

export interface StepperProps extends Omit<
  OlHTMLAttributes<HTMLOListElement>,
  'children'
> {
  orientation?: StepperOrientation;
  size?: StepperSize;
  currentStep?: number;
  defaultStep?: number;
  onStepChange?: (step: number) => void;
  children?: ReactNode;
}
