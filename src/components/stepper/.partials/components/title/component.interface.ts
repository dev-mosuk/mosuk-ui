import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperTitleProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: ReactNode;
}
