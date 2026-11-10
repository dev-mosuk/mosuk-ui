import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperIndicatorProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: ReactNode;
}
