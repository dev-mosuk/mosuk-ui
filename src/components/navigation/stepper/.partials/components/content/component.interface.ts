import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperContentProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: ReactNode;
}
