import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type HintTextProps<C extends ElementType = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'children'>;
