import type { SelectMode } from '@/components/select/.partials/enums/component.enums';
import type { Popover } from '@/components/popover';
import type { ReactNode } from 'react';

type SelectOwnProps = {
  mode?: SelectMode | `${SelectMode}`;
  keepMounted?: boolean;
  container?: Popover.Props['container'];
  placeholder?: string;
  selected?: string[];
  defaultSelected?: string[];
  query?: string;
  defaultQuery?: string;
  defaultOpen?: boolean;
  isOpen?: boolean;
  isDisabled?: boolean;
  isMultiple?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onSelectChange?: (selected: string[]) => void;
  onQueryChange?: (query: string) => void;
  children?: ReactNode;
};

export type SelectProps = SelectOwnProps;