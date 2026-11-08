import type {
  StepperOrientation,
  StepperSize,
} from '@/components/navigation/stepper/component/.partials/providers/context/context.interface';
import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperSkeletonProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> {
  orientation?: StepperOrientation;
  size?: StepperSize;
  children?: ReactNode;
}
