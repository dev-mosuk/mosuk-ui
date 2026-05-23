import { FieldsetHintType } from '@/components/forms/fieldset/component/components/hint/component.enums';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type FieldsetHintProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: FieldsetHintType;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
