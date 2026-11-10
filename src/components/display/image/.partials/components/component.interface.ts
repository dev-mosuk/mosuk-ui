import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ImageProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  isLoading?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
