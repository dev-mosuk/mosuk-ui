import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type DivProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
