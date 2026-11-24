import type { UseContextMenuProps } from '@/components/context-menu/.partials/hooks/hook.interface';
import { ContextMenuContext } from '@/components/context-menu/.partials/providers/context/context';
import { useContext } from 'react';

export function useContextMenu(): UseContextMenuProps {
  const context = useContext(ContextMenuContext);

  if (!context) {
    throw new Error('useContextMenu must be used within ContextMenu');
  }

  return context;
}
