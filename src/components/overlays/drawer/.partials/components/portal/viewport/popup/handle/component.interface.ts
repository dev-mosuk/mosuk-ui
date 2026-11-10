import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type DrawerPortalViewportPopupHandleProps<
  C extends ElementType = 'div',
> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
