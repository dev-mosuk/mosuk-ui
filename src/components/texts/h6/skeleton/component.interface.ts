import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type H6SkeletonProps<C extends ElementType = 'h6'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
