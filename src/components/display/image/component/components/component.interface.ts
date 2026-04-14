import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ImageProps<C extends ElementType = 'img'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
