import type { PropsOf } from '@/types/props-of';
import type { CSSProperties, Ref } from 'react';

export type CounterFlipProps<C = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  children?: never;
  className?: string;
  style?: CSSProperties;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'children' | 'className' | 'style'>;
