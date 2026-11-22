import type { Dropdown } from '@/components/dropdown';
import type { ListBox } from '@/components/list-box';
import type { ReactNode } from 'react';

export type AutocompleteProps = {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isDisabled?: boolean;
  keepMounted?: boolean;
  container?: Dropdown.Props['container'];
  selectionMode?: ListBox.Props['selectionMode'];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;
  children?: ReactNode;
};
