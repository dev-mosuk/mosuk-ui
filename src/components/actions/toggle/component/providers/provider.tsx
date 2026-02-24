'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ToggleContext } from './context/context';
import { ToggleProviderProps } from './provider.interface';

export function ToggleProvider({
  value: controlledValue,
  onChange: controlledOnChange,
  containerRef,
  children,
}: ToggleProviderProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<any | null>(null);
  const optionRefs = useRef<Map<any, HTMLElement>>(new Map());
  const fallbackContainerRef = useRef<HTMLElement | null>(null);

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

  const contextValue = useMemo(
    () => ({
      value,
      onChange,
      containerRef: containerRef ?? fallbackContainerRef,
      optionRefs,
      registerOption,
    }),
    [value, onChange, containerRef],
  );

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
}
