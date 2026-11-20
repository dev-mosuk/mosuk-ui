'use client';

import { ChatContext } from '@/components/collections/chat/.partials/providers/context/context';
import type { ChatProviderProps } from '@/components/collections/chat/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function ChatProvider({
  children,
  value,
  setValue,
  submit,
  disabled,
  canSubmit,
}: ChatProviderProps) {
  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      submit,
      disabled,
      canSubmit,
    }),
    [value, setValue, submit, disabled, canSubmit],
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
}
