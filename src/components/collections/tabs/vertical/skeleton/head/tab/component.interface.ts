import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabsVerticalHeadTabSkeletonProps<C extends ElementType = 'span'> =
  {
    as?: C;
    ref?: Ref<any>;
  } & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
