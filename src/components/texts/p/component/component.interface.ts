import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type PProps<C extends ElementType = 'p'> = {
    as?: C;
    ref?: Ref<any>;
  } & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
  