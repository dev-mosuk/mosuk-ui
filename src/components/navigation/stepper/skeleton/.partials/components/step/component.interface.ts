import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperStepSkeletonProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> {
  children?: ReactNode;
}
