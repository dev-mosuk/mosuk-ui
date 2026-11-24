import type { StepperVariant } from '@/components/stepper/.partials/enums/component.enums';
import type { StepperOrientation } from '@/components/stepper/.partials/providers/context/context.interface';
import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> {
  size?: number;
  stroke?: number;
  variant?: StepperVariant | `${StepperVariant}`;
  orientation?: StepperOrientation;
  step?: number;
  defaultStep?: number;
  onStepChange?: (step: number) => void;
  children?: ReactNode;
}
