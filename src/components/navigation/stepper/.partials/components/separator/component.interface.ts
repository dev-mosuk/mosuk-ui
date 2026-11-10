import type { HTMLAttributes } from 'react';

export interface StepperSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  progress?: number;
  force?: boolean;
}
