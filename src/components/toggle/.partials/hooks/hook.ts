import type { UseToggleProps } from '@/components/toggle/.partials/hooks/hook.interface';
import { ToggleContext } from '@/components/toggle/.partials/providers/context/context';
import { useContext } from 'react';

export function useToggle(): UseToggleProps {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggle must be used within Toggle');
  }

  return context;
}
