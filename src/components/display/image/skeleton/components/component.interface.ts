import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ImageSkeletonProps<C extends ElementType = 'img'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
