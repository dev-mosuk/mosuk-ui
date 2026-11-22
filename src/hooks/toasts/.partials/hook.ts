import type { UseToastsProps } from '@/hooks/toasts/.partials/hook.interface';
import { ToastsContext } from '@/providers/toasts/.partials/context/context';
import { useContext } from 'react';

export function useToasts(): UseToastsProps {
  const context = useContext(ToastsContext);

  if (!context) {
    throw new Error('useToasts must be used within <ToastsProvider>');
  }

  return context as UseToastsProps;
}
