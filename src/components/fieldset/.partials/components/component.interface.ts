import { FieldsetContextProps } from '@/components/fieldset/.partials/providers/context/context.interface';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type FieldsetProps<C extends ElementType = 'fieldset'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'disabled'> &
  Partial<FieldsetContextProps>;
