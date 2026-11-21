import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type EmptyProps<C extends ElementType = 'section'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
