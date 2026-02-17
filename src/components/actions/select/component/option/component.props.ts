import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type SelectOptionProps<C extends ElementType = 'option'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
