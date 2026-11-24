import { TooltipContext } from '@/components/tooltip/.partials/providers/context/context';
import type { TooltipProviderProps } from '@/components/tooltip/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function TooltipProvider({ children, handle }: TooltipProviderProps) {
  const value = useMemo(
    () => ({
      handle,
    }),
    [handle],
  );

  return (
    <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
  );
}
