import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabbarTabsTabProps<C extends ElementType = 'a'> = {
  as?: C;
  ref?: Ref<any>;
  isActive?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
