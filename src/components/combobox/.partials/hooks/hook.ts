import type { UseComboboxProps } from '@/components/combobox/.partials/hooks/hook.interface';
import { ComboboxContext } from '@/components/combobox/.partials/providers/context/context';
import { useContext } from 'react';

export function useCombobox(): UseComboboxProps {
  const context = useContext(ComboboxContext);

  if (!context) {
    throw new Error('useCombobox must be used within <Combobox>');
  }

  return context;
}
