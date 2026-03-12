import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type H1Props<C extends ElementType = 'h1'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
