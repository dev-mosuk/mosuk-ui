'use client';

import type { AutocompleteProps } from '@/components/autocomplete/.partials/components/component.interface';
import { AutocompleteContext } from '@/components/autocomplete/.partials/providers/context/context';
import { Dropdown } from '@/components/dropdown';
import { ListBox } from '@/components/list-box';
import React, { useCallback, useMemo, useRef, useState } from 'react';

export function Autocomplete({
  isOpen: isOpenProp,
  defaultOpen = false,
  onOpenChange,
  isDisabled,
  keepMounted,
  container,
  selectionMode = ListBox.ENUMS.SelectionMode.Single,
  value: valueProp,
  defaultValue = [],
  onValueChange,
  placeholder,
  query: queryProp,
  defaultQuery = '',
  onQueryChange,
  children,
}: AutocompleteProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [uncontrolledQuery, setUncontrolledQuery] = useState(defaultQuery);
  const [labels, setLabels] = useState<Record<string, string>>({});
  const isOpenControlled = isOpenProp !== undefined;
  const isValueControlled = valueProp !== undefined;
  const isQueryControlled = queryProp !== undefined;
  const isOpen = isOpenControlled ? Boolean(isOpenProp) : uncontrolledOpen;
  const value = isValueControlled ? (valueProp ?? []) : uncontrolledValue;
  const query = isQueryControlled ? (queryProp ?? '') : uncontrolledQuery;
  const ignoreTriggerCloseRef = useRef(false);

  const commitQuery = useCallback(
    (next: string) => {
      if (!isQueryControlled) {
        setUncontrolledQuery(next);
      }

      onQueryChange?.(next);
    },
    [isQueryControlled, onQueryChange],
  );

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!isOpenControlled) {
        setUncontrolledOpen(next);
      }

      onOpenChange?.(next);

      if (!next) {
        commitQuery('');
      }
    },
    [commitQuery, isOpenControlled, onOpenChange],
  );

  const close = useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  const commitValue = useCallback(
    (next: string[]) => {
      if (!isValueControlled) {
        setUncontrolledValue(next);
      }

      onValueChange?.(next);

      if (selectionMode !== ListBox.ENUMS.SelectionMode.Multiple) {
        handleOpenChange(false);
      }
    },
    [handleOpenChange, isValueControlled, onValueChange, selectionMode],
  );

  const clear = useCallback(() => {
    commitValue([]);
  }, [commitValue]);

  const noteFieldPress = useCallback(() => {
    ignoreTriggerCloseRef.current = true;
  }, []);

  const rememberItem = useCallback(
    (item: { id: string; textValue: string }) => {
      setLabels((current) => {
        if (current[item.id] === item.textValue) {
          return current;
        }

        return {
          ...current,
          [item.id]: item.textValue,
        };
      });
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      isOpen,
      onOpenChange: handleOpenChange,
      close,
      isDisabled,
      noteFieldPress,
      selectionMode,
      value,
      onValueChange: commitValue,
      placeholder,
      query,
      onQueryChange: commitQuery,
      labels,
      rememberItem,
      clear,
    }),
    [
      isOpen,
      handleOpenChange,
      close,
      isDisabled,
      noteFieldPress,
      selectionMode,
      value,
      commitValue,
      placeholder,
      query,
      commitQuery,
      labels,
      rememberItem,
      clear,
    ],
  );

  return (
    <AutocompleteContext.Provider value={contextValue}>
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
    </AutocompleteContext.Provider>
  );
}
