import type { UseAutocompleteProps } from '@/components/autocomplete/.partials/hooks/hook.interface';
import { AutocompleteContext } from '@/components/autocomplete/.partials/providers/context/context';
import { useContext } from 'react';

export function useAutocomplete(): UseAutocompleteProps {
  const context = useContext(AutocompleteContext);

  if (!context) {
    throw new Error('useAutocomplete must be used within <Autocomplete>');
  }

  return context;
}
