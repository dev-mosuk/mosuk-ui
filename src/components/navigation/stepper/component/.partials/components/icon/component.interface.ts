import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperIconProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: ReactNode;
}
