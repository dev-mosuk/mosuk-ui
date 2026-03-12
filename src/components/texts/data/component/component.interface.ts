import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type DataProps<C extends ElementType = 'data'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
