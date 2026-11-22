'use client';

import { ListBoxContext } from '@/components/list-box/.partials/providers/context/context';
import type { ListBoxProviderProps } from '@/components/list-box/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function ListBoxProvider({
  children,
  selectionMode,
  value,
  highlightedId,
  registerItem,
  unregisterItem,
  setHighlightedId,
  select,
  onAction,
  getItem,
  getItems,
  matches,
  onItemRegister,
}: ListBoxProviderProps) {
  const contextValue = useMemo(
    () => ({
      selectionMode,
      value,
      highlightedId,
      registerItem,
      unregisterItem,
      setHighlightedId,
      select,
      onAction,
      getItem,
      getItems,
      matches,
      onItemRegister,
    }),
    [
      selectionMode,
      value,
      highlightedId,
      registerItem,
      unregisterItem,
      setHighlightedId,
      select,
      onAction,
      getItem,
      getItems,
      matches,
      onItemRegister,
    ],
  );

  return (
    <ListBoxContext.Provider value={contextValue}>
      {children}
    </ListBoxContext.Provider>
  );
}
