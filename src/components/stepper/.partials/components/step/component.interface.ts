import type { PropsOf } from '@/types/props-of';
import type { CSSProperties, MouseEventHandler, ReactNode, Ref } from 'react';

type StepperStepOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  stroke?: number;
  style?: CSSProperties;
  className?: string;
  tabIndex?: number;
  onClick?: MouseEventHandler<any>;
  children?: ReactNode;
};

export type StepperStepProps<C = 'button'> = StepperStepOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'tabIndex'
    | 'onClick'
    | 'children'
    | 'disabled'
    | 'type'
  >;
