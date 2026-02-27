import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type H5SkeletonProps<C extends ElementType = 'h5'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
