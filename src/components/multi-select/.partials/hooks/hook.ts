import type { UseMultiSelectProps } from '@/components/multi-select/.partials/hooks/hook.interface';
import { MultiSelectContext } from '@/components/multi-select/.partials/providers/context/context';
import { useContext } from 'react';

export function useMultiSelect(): UseMultiSelectProps {
  const context = useContext(MultiSelectContext);

  if (!context) {
    throw new Error('useMultiSelect must be used within <MultiSelect>');
  }

  return context;
}
