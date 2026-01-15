import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';
import { FieldsetContextProps } from './context/context.interface';

export type FieldsetProps<C extends ElementType = 'fieldset'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'> &
  Partial<FieldsetContextProps>;
