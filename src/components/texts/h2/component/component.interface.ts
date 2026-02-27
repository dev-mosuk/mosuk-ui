import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type H2Props<C extends ElementType = 'h2'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
