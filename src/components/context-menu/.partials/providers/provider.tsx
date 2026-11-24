'use client';

import { ContextMenuContext } from '@/components/context-menu/.partials/providers/context/context';
import type { ContextMenuProviderProps } from '@/components/context-menu/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function ContextMenuProvider({
  children,
  keepMounted,
  container,
}: ContextMenuProviderProps) {
  const value = useMemo(
    () => ({
      keepMounted,
      container,
    }),
    [keepMounted, container],
  );

  return (
    <ContextMenuContext.Provider value={value}>
      {children}
    </ContextMenuContext.Provider>
  );
}
