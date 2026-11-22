import type { Dropdown } from '@/components/dropdown';
import type { ReactNode } from 'react';

export type ComboboxProps = {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isDisabled?: boolean;
  keepMounted?: boolean;
  container?: Dropdown.Props['container'];
  children?: ReactNode;
};
