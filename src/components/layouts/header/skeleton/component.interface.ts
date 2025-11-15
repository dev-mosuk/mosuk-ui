import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type HeaderSkeletonProps<C extends ElementType = 'header'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
