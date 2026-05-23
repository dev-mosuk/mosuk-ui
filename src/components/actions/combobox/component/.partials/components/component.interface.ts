import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';

export type ComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> = ComboboxPrimitive.Root.Props<Value, Multiple>;
