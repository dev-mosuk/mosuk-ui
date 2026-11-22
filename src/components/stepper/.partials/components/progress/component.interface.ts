import type { PropsOf } from '@/components/stepper/.partials/utilities/props-of';
import type { CSSProperties, Ref } from 'react';

type StepperProgressOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  stroke?: number;
  progress?: number;
  style?: CSSProperties;
  className?: string;
};

export type StepperProgressProps<C = 'figure'> = StepperProgressOwnProps<C> &
  Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'style' | 'children'>;
