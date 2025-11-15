import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabbarProps<C extends ElementType = 'aside'> = {
  as?: C;
  ref?: Ref<any>;
  tabbar?: {
    enable?: boolean;
    height?: number;
    delay?: {
      top?: number;
      bottom?: number;
    };
  };
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
