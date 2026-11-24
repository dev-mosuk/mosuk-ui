export type MultiSelectItemLabel = {
  id: string;
  textValue: string;
};

export type MultiSelectContextProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  close: () => void;
  isDisabled?: boolean;
  noteFieldPress: () => void;
  selected: string[];
  onSelectChange: (selected: string[]) => void;
  removeSelected: (id: string) => void;
  placeholder?: string;
  query: string;
  onQueryChange: (query: string) => void;
  labels: Record<string, string>;
  rememberItem: (item: MultiSelectItemLabel) => void;
  clear: () => void;
  size: number;
};
