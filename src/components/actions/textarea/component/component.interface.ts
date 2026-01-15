import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TextareaProps<C extends ElementType = 'textarea'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
