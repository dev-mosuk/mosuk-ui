import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';
import { FieldsetHintType } from './component.enums';

export type FieldsetHintProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: FieldsetHintType;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
