'use client';

import { ChatContext } from '@/components/chat/.partials/providers/context/context';
import type { ChatProviderProps } from '@/components/chat/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function ChatProvider({
  children,
  value,
  setValue,
  submit,
  isDisabled,
  canSubmit,
}: ChatProviderProps) {
  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      submit,
      isDisabled,
      canSubmit,
    }),
    [value, setValue, submit, isDisabled, canSubmit],
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
}
