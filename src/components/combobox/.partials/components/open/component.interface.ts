import type { Dropdown } from '@/components/dropdown';

export type ComboboxOpenProps = Omit<
  Dropdown.Open.Props,
  'nativeButton' | 'render' | 'isDisabled'
>;
