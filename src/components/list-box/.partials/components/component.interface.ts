import type { ListBoxSelectionMode } from '@/components/list-box/.partials/enums/component.enums';
import type { HTMLAttributes, ReactNode } from 'react';

export type ListBoxItemMatch = {
  id: string;
  textValue: string;
};

export interface ListBoxProps extends Omit<
  HTMLAttributes<HTMLUListElement>,
  'defaultValue' | 'onChange'
> {
  selectionMode?: ListBoxSelectionMode | `${ListBoxSelectionMode}`;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  onAction?: (id: string) => void;
  matches?: (item: ListBoxItemMatch) => boolean;
  onItemRegister?: (item: ListBoxItemMatch) => void;
  empty?: ReactNode;
}
