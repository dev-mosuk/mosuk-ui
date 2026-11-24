import type { SelectMode } from '@/components/select/.partials/enums/component.enums';

export type SelectItemLabel = {
  id: string;
  textValue: string;
};

export type SelectContextProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  close: () => void;
  isDisabled?: boolean;
  noteFieldPress: () => void;
  mode: SelectMode;
  isMultiple: boolean;
  selected: string[];
  onSelectChange: (selected: string[]) => void;
  placeholder?: string;
  query: string;
  onQueryChange: (query: string) => void;
  labels: Record<string, string>;
  rememberItem: (item: SelectItemLabel) => void;
  clear: () => void;
};
