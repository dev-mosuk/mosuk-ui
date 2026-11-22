import type { UseDialogProps } from '@/components/dialog/.partials/hooks/hook.interface';
import { DialogContext } from '@/components/dialog/.partials/providers/context/context';
import { useContext } from 'react';

export function useDialog(): UseDialogProps {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within Dialog');
  }

  return context;
}
