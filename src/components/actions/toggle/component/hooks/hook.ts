import { useContext } from 'react';
import { ToggleContext } from '../providers/context/context';

export function useToggle() {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggle must be used within Toggle');
  }

  return context;
}
