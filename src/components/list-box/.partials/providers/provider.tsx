'use client';

import { ListBoxContext } from '@/components/list-box/.partials/providers/context/context';
import type { ListBoxProviderProps } from '@/components/list-box/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function ListBoxProvider({
  children,
  mode,
  variant,
  selected,
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
      mode,
      variant,
      selected,
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
      mode,
      variant,
      selected,
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
