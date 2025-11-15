import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type IconProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
