import type { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';
import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type CounterProps<C extends ElementType = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  value: number;
  animation?: CounterAnimation | `${CounterAnimation}`;
  children?: never;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'children' | 'value'>;
