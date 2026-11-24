import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabsHeaderProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  activateOnFocus?: boolean;
  loopFocus?: boolean;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'activateOnFocus' | 'loopFocus'
>;
