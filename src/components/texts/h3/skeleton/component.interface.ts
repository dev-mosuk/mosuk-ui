import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type H3SkeletonProps<C extends ElementType = 'h3'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
