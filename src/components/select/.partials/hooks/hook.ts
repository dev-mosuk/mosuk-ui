import type { UseSelectProps } from '@/components/select/.partials/hooks/hook.interface';
import { SelectContext } from '@/components/select/.partials/providers/context/context';
import { useContext } from 'react';

export function useSelect(): UseSelectProps {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('useSelect must be used within Select');
  }

  return context;
}
