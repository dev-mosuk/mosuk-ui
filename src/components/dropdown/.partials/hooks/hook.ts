import type { UseDropdownProps } from '@/components/dropdown/.partials/hooks/hook.interface';
import { DropdownContext } from '@/components/dropdown/.partials/providers/context/context';
import { useContext } from 'react';

export function useDropdown(): UseDropdownProps {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdown must be used within Dropdown');
  }

  return context;
}
