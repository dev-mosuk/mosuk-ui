import { NavigationMenuContext } from '@/components/navigation-menu/.partials/providers/context/context';
import type { NavigationMenuProviderProps } from '@/components/navigation-menu/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function NavigationMenuProvider({
  children,
  keepMounted,
  container,
}: NavigationMenuProviderProps) {
  const value = useMemo(
    () => ({
      keepMounted,
      container,
    }),
    [keepMounted, container],
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      {children}
    </NavigationMenuContext.Provider>
  );
}
