import { FieldsetContextProps } from '@/components/forms/fieldset/component/providers/context/context.interface';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type FieldsetProps<C extends ElementType = 'fieldset'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'> &
  Partial<FieldsetContextProps>;
