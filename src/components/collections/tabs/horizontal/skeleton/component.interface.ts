import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabsHorizontalSkeletonProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
