import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperDescriptionProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: ReactNode;
}
