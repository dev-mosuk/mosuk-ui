import { FieldsetContextProps } from '@/components/fieldset/.partials/providers/context/context.interface';
import { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type FieldsetProps<C = 'fieldset'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'disabled' | 'className' | 'children'> &
  Partial<FieldsetContextProps>;
