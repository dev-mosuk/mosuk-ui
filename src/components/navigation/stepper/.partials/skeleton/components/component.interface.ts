import type {
  StepperOrientation,
  StepperSize,
} from '@/components/navigation/stepper/.partials/providers/context/context.interface';
import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperSkeletonProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> {
  orientation?: StepperOrientation;
  size?: StepperSize;
  children?: ReactNode;
}
