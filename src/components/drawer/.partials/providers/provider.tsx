import { DrawerContext } from '@/components/drawer/.partials/providers/context/context';
import type { DrawerProviderProps } from '@/components/drawer/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function DrawerProvider({
  children,
  direction,
  keepMounted,
  container,
}: DrawerProviderProps) {
  const value = useMemo(
    () => ({
      direction,
      keepMounted,
      container,
    }),
    [direction, keepMounted, container],
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}
