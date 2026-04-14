import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type HeaderProps<C extends ElementType = 'header'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
