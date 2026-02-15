'use client';

import React, { useCallback, useRef, useState } from 'react';
import { ToggleContext } from './context/context';
import { ToggleProviderProps } from './provider.interface';

export function ToggleProvider({
  value: controlledValue,
  onChange: controlledOnChange,
  children,
}: ToggleProviderProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<any | null>(null);
  const optionRefs = useRef<Map<any, HTMLElement>>(new Map());

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const onChange = useCallback(
    (nextValue: any) => {
      if (controlledOnChange) {
        controlledOnChange(nextValue);
      } else {
        setUncontrolledValue(nextValue);
      }
    },
    [controlledOnChange],
  );

  const registerOption = useCallback((val: any, el: HTMLElement | null) => {
    if (el) {
      optionRefs.current.set(val, el);
    } else {
      optionRefs.current.delete(val);
    }
  }, []);

  return (
    <ToggleContext.Provider
      value={{ value, onChange, optionRefs, registerOption }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
