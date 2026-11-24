'use client';

import type { MultiSelectProps } from '@/components/multi-select/.partials/components/component.interface';
import {
  MULTI_SELECT_DEFAULT_OPEN,
  MULTI_SELECT_DEFAULT_QUERY,
  MULTI_SELECT_DEFAULT_SELECTED,
  MULTI_SELECT_DEFAULT_SIZE,
} from '@/components/multi-select/.partials/constants/component.constants';
import { MultiSelectContext } from '@/components/multi-select/.partials/providers/context/context';
import { Popover } from '@/components/popover';
import React, { useCallback, useMemo, useRef, useState } from 'react';

export function MultiSelect({
  size = MULTI_SELECT_DEFAULT_SIZE,
  keepMounted,
  container,
  placeholder,
  selected: selectedProp,
  defaultSelected = MULTI_SELECT_DEFAULT_SELECTED,
  query: queryProp,
  defaultQuery = MULTI_SELECT_DEFAULT_QUERY,
  defaultOpen = MULTI_SELECT_DEFAULT_OPEN,
  isOpen: isOpenProp,
  isDisabled,
  onOpenChange,
  onSelectChange,
  onQueryChange,
  children,
}: MultiSelectProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState(defaultSelected);
  const [uncontrolledQuery, setUncontrolledQuery] = useState(defaultQuery);
  const [labels, setLabels] = useState<Record<string, string>>({});
  const isOpenControlled = isOpenProp !== undefined;
  const isSelectedControlled = selectedProp !== undefined;
  const isQueryControlled = queryProp !== undefined;
  const isOpen = isOpenControlled ? Boolean(isOpenProp) : uncontrolledOpen;
  const selected = isSelectedControlled
    ? (selectedProp ?? [])
    : uncontrolledSelected;
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

  const commitSelected = useCallback(
    (next: string[]) => {
      if (!isSelectedControlled) {
        setUncontrolledSelected(next);
      }

      onSelectChange?.(next);
    },
    [isSelectedControlled, onSelectChange],
  );

  const removeSelected = useCallback(
    (id: string) => {
      commitSelected(selected.filter((item) => item !== id));
    },
    [commitSelected, selected],
  );

  const clear = useCallback(() => {
    commitSelected([]);
  }, [commitSelected]);

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
      selected,
      onSelectChange: commitSelected,
      removeSelected,
      placeholder,
      query,
      onQueryChange: commitQuery,
      labels,
      rememberItem,
      clear,
      size,
    }),
    [
      isOpen,
      handleOpenChange,
      close,
      isDisabled,
      noteFieldPress,
      selected,
      commitSelected,
      removeSelected,
      placeholder,
      query,
      commitQuery,
      labels,
      rememberItem,
      clear,
      size,
    ],
  );

  return (
    <MultiSelectContext.Provider value={contextValue}>
      <Popover
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
      </Popover>
    </MultiSelectContext.Provider>
  );
}
