import { Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type FieldsetFieldInputProps<C = 'input'> = {
  as?: C;
  ref?: Ref<any>;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'id' | 'name' | 'placeholder' | 'className'
>;
