import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type InputProps<C extends ElementType = 'input'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
