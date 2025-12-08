import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type CounterProps<C extends ElementType = 'span'> = {
    as?: C;
    ref?: Ref<any>;
  } & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
  