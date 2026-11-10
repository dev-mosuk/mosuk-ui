import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperContentSkeletonProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: ReactNode;
}
