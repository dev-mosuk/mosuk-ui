import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type EmptyContentProps<C extends ElementType = 'article'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
