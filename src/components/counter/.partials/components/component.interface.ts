import type { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';
import type { CSSProperties, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type CounterProps<C = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  value: number;
  animation?: CounterAnimation | `${CounterAnimation}`;
  children?: never;
  className?: string;
  style?: CSSProperties;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'children' | 'value' | 'className' | 'style'
>;
