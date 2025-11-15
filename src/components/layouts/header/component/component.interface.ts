import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type HeaderProps<C extends ElementType = 'header'> = {
  as?: C;
  ref?: Ref<any>;
  header?: {
    enable?: boolean;
    height?: number;
    delay?: {
      top?: number;
      bottom?: number;
    };
  };
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
