import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type CounterCountProps = {
  as?: ElementType;
  ref?: Ref<any>;
  children?: never;
} & Omit<ComponentPropsWithoutRef<'span'>, 'as' | 'ref' | 'children'>;
