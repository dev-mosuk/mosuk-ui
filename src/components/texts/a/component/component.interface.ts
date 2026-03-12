import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type AProps<C extends ElementType = 'a'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
