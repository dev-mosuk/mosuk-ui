import { Select as SelectPrimitive } from '@base-ui/react/select';
import type { ReactNode } from 'react';

export type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = SelectPrimitive.Root.Props<Value, Multiple> & {
  placeholder?: ReactNode;
};
