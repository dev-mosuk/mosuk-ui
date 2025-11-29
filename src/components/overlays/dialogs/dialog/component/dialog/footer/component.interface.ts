import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type DialogDialogFooterProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
