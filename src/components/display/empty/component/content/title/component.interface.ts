import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type EmptyContentTitleProps<C extends ElementType = 'h3'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
