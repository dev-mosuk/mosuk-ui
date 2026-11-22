import type { Dropdown } from '@/components/dropdown';

export type AutocompleteOpenProps = Omit<
  Dropdown.Open.Props,
  'nativeButton' | 'render' | 'isDisabled'
>;
