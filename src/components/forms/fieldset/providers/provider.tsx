'use client';

import { FieldsetContext } from '@/components/forms/fieldset/providers/context/context';
import { FieldsetProviderProps } from '@/components/forms/fieldset/providers/provider.interface';
import React, { useState } from 'react';

export const FieldsetProvider = ({ ...rest }: FieldsetProviderProps) => {
  const [ctxId, setCtxId] = useState<string>('');
  const [ctxName, setCtxName] = useState<string>('');

  return (
    <FieldsetContext.Provider
      value={{
        id: ctxId,
        setId: setCtxId,
        name: ctxName,
        setName: setCtxName,
      }}
    >
      {rest?.children}
    </FieldsetContext.Provider>
  );
};
