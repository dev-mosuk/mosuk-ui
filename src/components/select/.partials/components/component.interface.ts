import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { ReactNode } from 'react';

export type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = Omit<
  SelectPrimitive.Root.Props<Value, Multiple>,
  'open' | 'disabled' | 'readOnly' | 'required'
> & {
  isOpen?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  placeholder?: ReactNode;
};
