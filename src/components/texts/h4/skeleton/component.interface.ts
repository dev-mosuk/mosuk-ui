import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type H4SkeletonProps<C extends ElementType = 'h4'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
