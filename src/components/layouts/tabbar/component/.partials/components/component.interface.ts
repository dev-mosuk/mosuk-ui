import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabbarProps<C extends ElementType = 'aside'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
