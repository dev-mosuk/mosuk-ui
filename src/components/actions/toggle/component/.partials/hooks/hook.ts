import { ToggleContext } from '@/components/actions/toggle/component/.partials/providers/context/context';
import { useContext } from 'react';

export function useToggle() {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggle must be used within Toggle');
  }

  return context;
}
