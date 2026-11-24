import type { Popover } from '@/components/popover';
import type { ReactNode } from 'react';

type MultiSelectOwnProps = {
  size?: number;
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
  onOpenChange?: (isOpen: boolean) => void;
  onSelectChange?: (selected: string[]) => void;
  onQueryChange?: (query: string) => void;
  children?: ReactNode;
};

export type MultiSelectProps = MultiSelectOwnProps;