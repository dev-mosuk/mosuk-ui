import type {
  ListBoxMode,
  ListBoxVariant,
} from '@/components/list-box/.partials/enums/component.enums';
import type { HTMLAttributes, ReactNode } from 'react';

export type ListBoxItemMatch = {
  id: string;
  textValue: string;
};

export interface ListBoxProps extends Omit<
  HTMLAttributes<HTMLUListElement>,
  'defaultValue' | 'onChange'
> {
  selected?: string[];
  defaultSelected?: string[];
  onSelectChange?: (selected: string[]) => void;
  mode?: ListBoxMode | `${ListBoxMode}`;
  variant?: ListBoxVariant | `${ListBoxVariant}`;
  onAction?: (id: string) => void;
  matches?: (item: ListBoxItemMatch) => boolean;
  onItemRegister?: (item: ListBoxItemMatch) => void;
  empty?: ReactNode;
}
