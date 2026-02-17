import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type SelectProps<C extends ElementType = 'select'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
