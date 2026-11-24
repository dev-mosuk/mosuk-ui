'use client';

import type { SelectProps } from '@/components/select/.partials/components/component.interface';
import {
  SELECT_DEFAULT_IS_MULTIPLE,
  SELECT_DEFAULT_MODE,
  SELECT_DEFAULT_OPEN,
  SELECT_DEFAULT_QUERY,
  SELECT_DEFAULT_SELECTED,
} from '@/components/select/.partials/constants/component.constants';
import { SelectMode } from '@/components/select/.partials/enums/component.enums';
import { SelectContext } from '@/components/select/.partials/providers/context/context';
import { Popover } from '@/components/popover';
import React, { useCallback, useMemo, useRef, useState } from 'react';

export function Select({
  mode = SELECT_DEFAULT_MODE,
  keepMounted,
  container,
  placeholder,
  selected: selectedProp,
  defaultSelected = SELECT_DEFAULT_SELECTED,
  query: queryProp,
  defaultQuery = SELECT_DEFAULT_QUERY,
  defaultOpen = SELECT_DEFAULT_OPEN,
  isOpen: isOpenProp,
  isDisabled,
  isMultiple = SELECT_DEFAULT_IS_MULTIPLE,
  onOpenChange,
  onSelectChange,
  onQueryChange,
  children,
}: SelectProps) {
  const resolvedMode =
    mode === SelectMode.Search ? SelectMode.Search : SelectMode.Select;
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

      if (!next && resolvedMode === SelectMode.Search) {
        commitQuery('');
      }
    },
    [commitQuery, isOpenControlled, onOpenChange, resolvedMode],
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

      if (!isMultiple) {
        handleOpenChange(false);
      }
    },
    [handleOpenChange, isMultiple, isSelectedControlled, onSelectChange],
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
      mode: resolvedMode,
      isMultiple,
      selected,
      onSelectChange: commitSelected,
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
      resolvedMode,
      isMultiple,
      selected,
      commitSelected,
      placeholder,
      query,
      commitQuery,
      labels,
      rememberItem,
      clear,
    ],
  );

  return (
    <SelectContext.Provider value={contextValue}>
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
    </SelectContext.Provider>
  );
}
