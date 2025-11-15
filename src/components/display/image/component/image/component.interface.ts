import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ImageImageProps<C extends ElementType = 'img'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
