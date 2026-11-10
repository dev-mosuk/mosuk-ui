import { Combobox } from '@base-ui/react/combobox';

export type ComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> = Combobox.Root.Props<Value, Multiple>;
