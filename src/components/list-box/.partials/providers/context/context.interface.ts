import type { ListBoxItemMatch } from '@/components/list-box/.partials/components/component.interface';
import type {
  ListBoxMode,
  ListBoxVariant,
} from '@/components/list-box/.partials/enums/component.enums';

export interface ListBoxItemRegistration {
  id: string;
  textValue: string;
  isDisabled: boolean;
}

export interface ListBoxContextProps {
  mode: ListBoxMode | `${ListBoxMode}`;
  variant: ListBoxVariant | `${ListBoxVariant}`;
  selected: string[];
  highlightedId: string | null;
  registerItem: (item: ListBoxItemRegistration) => void;
  unregisterItem: (id: string) => void;
  setHighlightedId: (id: string | null) => void;
  select: (id: string) => void;
  onAction?: (id: string) => void;
  getItem: (id: string) => ListBoxItemRegistration | undefined;
  getItems: () => Map<string, ListBoxItemRegistration>;
  matches?: (item: ListBoxItemMatch) => boolean;
  onItemRegister?: (item: ListBoxItemMatch) => void;
}
