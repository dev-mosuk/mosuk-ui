'use client';

import React, { useState } from 'react';
import { FieldsetContext } from './context/context';
import { FieldsetProviderProps } from './provider.interface';

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
