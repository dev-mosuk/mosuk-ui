import {
    ComponentPropsWithoutRef,
    ElementType,
    Ref
} from 'react';

export type TabsHorizontalHeadSkeletonProps<C extends ElementType = 'nav'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
