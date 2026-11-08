import type { HTMLAttributes, ReactNode } from 'react';

export interface StepperStepProps extends Omit<
  HTMLAttributes<HTMLLIElement>,
  'children'
> {
  children?: ReactNode;
}
