import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type EmptyIconProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
