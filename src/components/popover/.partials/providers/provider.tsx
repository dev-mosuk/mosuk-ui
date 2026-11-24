import { PopoverContext } from '@/components/popover/.partials/providers/context/context';
import type { PopoverProviderProps } from '@/components/popover/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function PopoverProvider({
  children,
  keepMounted,
  container,
}: PopoverProviderProps) {
  const value = useMemo(
    () => ({
      keepMounted,
      container,
    }),
    [keepMounted, container],
  );

  return (
    <PopoverContext.Provider value={value}>
      {children}
    </PopoverContext.Provider>
  );
}
