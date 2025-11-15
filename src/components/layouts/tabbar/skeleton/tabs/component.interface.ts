import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabbarTabsSkeletonProps<C extends ElementType = 'nav'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
