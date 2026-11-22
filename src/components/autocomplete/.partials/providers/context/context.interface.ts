import type { ListBox } from '@/components/list-box';

export interface AutocompleteItemLabel {
  id: string;
  textValue: string;
}

export interface AutocompleteContextProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  close: () => void;
  isDisabled?: boolean;
  noteFieldPress: () => void;
  selectionMode: NonNullable<ListBox.Props['selectionMode']>;
  value: string[];
  onValueChange: (value: string[]) => void;
  placeholder?: string;
  query: string;
  onQueryChange: (query: string) => void;
  labels: Record<string, string>;
  rememberItem: (item: AutocompleteItemLabel) => void;
  clear: () => void;
}
