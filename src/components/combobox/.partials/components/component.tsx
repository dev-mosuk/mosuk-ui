'use client';

import type { ComboboxProps } from '@/components/combobox/.partials/components/component.interface';
import { ComboboxContext } from '@/components/combobox/.partials/providers/context/context';
import { Dropdown } from '@/components/dropdown';
import React, { useCallback, useMemo, useRef, useState } from 'react';

export function Combobox({
  isOpen: isOpenProp,
  defaultOpen = false,
  onOpenChange,
  isDisabled,
  keepMounted,
  container,
  children,
}: ComboboxProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? Boolean(isOpenProp) : uncontrolledOpen;
  const ignoreTriggerCloseRef = useRef(false);

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(next);
      }

      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const close = useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  const noteFieldPress = useCallback(() => {
    ignoreTriggerCloseRef.current = true;
  }, []);

  const contextValue = useMemo(
    () => ({
      isOpen,
      onOpenChange: handleOpenChange,
      close,
      isDisabled,
      noteFieldPress,
    }),
    [isOpen, handleOpenChange, close, isDisabled, noteFieldPress],
  );

  return (
    <ComboboxContext.Provider value={contextValue}>
      <Dropdown
        isOpen={isOpen}
        keepMounted={keepMounted}
        container={container}
        onOpenChange={(next) => {
          if (isDisabled) {
            return;
          }

          if (!next && ignoreTriggerCloseRef.current) {
            ignoreTriggerCloseRef.current = false;

            return;
          }

          handleOpenChange(next);
        }}
      >
        {children}
      </Dropdown>
    </ComboboxContext.Provider>
  );
}
