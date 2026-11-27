import type { UseNavigationMenuProps } from '@/components/navigation-menu/.partials/hooks/hook.interface';
import { NavigationMenuContext } from '@/components/navigation-menu/.partials/providers/context/context';
import { useContext } from 'react';

export function useNavigationMenu(): UseNavigationMenuProps {
  const context = useContext(NavigationMenuContext);

  if (!context) {
    throw new Error('useNavigationMenu must be used within NavigationMenu');
  }

  return context;
}
