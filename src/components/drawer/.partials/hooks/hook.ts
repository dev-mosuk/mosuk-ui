import type { UseDrawerProps } from '@/components/drawer/.partials/hooks/hook.interface';
import { DrawerContext } from '@/components/drawer/.partials/providers/context/context';
import { useContext } from 'react';

export function useDrawer(): UseDrawerProps {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawer must be used within Drawer');
  }

  return context;
}
