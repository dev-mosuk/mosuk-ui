'use client';

import type { ListBoxProps } from '@/components/list-box/.partials/components/component.interface';
import { LIST_BOX_DEFAULT_SELECTION_MODE } from '@/components/list-box/.partials/constants/component.constants';
import { ListBoxSelectionMode } from '@/components/list-box/.partials/enums/component.enums';
import { useListBoxKeyboard } from '@/components/list-box/.partials/hooks/hook';
import type { ListBoxItemRegistration } from '@/components/list-box/.partials/providers/context/context.interface';
import { ListBoxProvider } from '@/components/list-box/.partials/providers/provider';
import styles from '@/components/list-box/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export function ListBox({
  selectionMode = LIST_BOX_DEFAULT_SELECTION_MODE,
  value: valueProp,
  defaultValue,
  onValueChange,
  onAction,
  matches,
  onItemRegister,
  empty,
  className,
  children,
  onKeyDown: onKeyDownProp,
  ...rest
}: ListBoxProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef(new Map<string, ListBoxItemRegistration>());
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(
    defaultValue ?? [],
  );
  const value = isControlled ? (valueProp ?? []) : uncontrolledValue;
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [itemsVersion, setItemsVersion] = useState(0);
  const syncScheduledRef = useRef(false);

  const scheduleItemsSync = useCallback(() => {
    if (syncScheduledRef.current) {
      return;
    }

    syncScheduledRef.current = true;
    queueMicrotask(() => {
      syncScheduledRef.current = false;
      setItemsVersion((version) => version + 1);
    });
  }, []);

  const registerItem = useCallback(
    (item: ListBoxItemRegistration) => {
      itemsRef.current.set(item.id, item);
      scheduleItemsSync();
    },
    [scheduleItemsSync],
  );

  const unregisterItem = useCallback(
    (id: string) => {
      itemsRef.current.delete(id);
      scheduleItemsSync();
    },
    [scheduleItemsSync],
  );

  const getItem = useCallback((id: string) => itemsRef.current.get(id), []);

  const getItems = useCallback(() => itemsRef.current, []);

  const commitValue = useCallback(
    (next: string[]) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }

      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const select = useCallback(
    (id: string) => {
      const item = itemsRef.current.get(id);

      if (!item || item.isDisabled) {
        return;
      }

      onAction?.(id);

      if (selectionMode === ListBoxSelectionMode.None) {
        return;
      }

      if (selectionMode === ListBoxSelectionMode.Multiple) {
        const next = value.includes(id)
          ? value.filter((entry) => entry !== id)
          : [...value, id];
        commitValue(next);

        return;
      }

      commitValue(value.includes(id) && value.length === 1 ? value : [id]);
    },
    [commitValue, onAction, selectionMode, value],
  );

  useEffect(() => {
    const isVisible = (id: string) => {
      const item = itemsRef.current.get(id);

      if (!item || item.isDisabled) {
        return false;
      }

      if (matches && !matches(item)) {
        return false;
      }

      return true;
    };

    if (highlightedId && isVisible(highlightedId)) {
      return;
    }

    const firstSelected = value.find((id) => isVisible(id));

    if (firstSelected) {
      setHighlightedId(firstSelected);

      return;
    }

    const orderedIds = listRef.current
      ? Array.from(
          listRef.current.querySelectorAll(
            '[data-list-box-item-id]:not([hidden])',
          ),
        ).map((element) => element.getAttribute('data-list-box-item-id')!)
      : Array.from(itemsRef.current.keys());

    const firstEnabled = orderedIds.find((id) => isVisible(id));

    setHighlightedId(firstEnabled ?? null);
  }, [highlightedId, matches, value, itemsVersion]);

  const visibleCount = useMemo(() => {
    let count = 0;

    itemsRef.current.forEach((item) => {
      if (matches && !matches(item)) {
        return;
      }

      count += 1;
    });

    return count;
  }, [itemsVersion, matches]);

  const contextValue = useMemo(
    () => ({
      selectionMode,
      value,
      highlightedId,
      registerItem,
      unregisterItem,
      setHighlightedId,
      select,
      onAction,
      getItem,
      getItems,
      matches,
      onItemRegister,
    }),
    [
      selectionMode,
      value,
      highlightedId,
      registerItem,
      unregisterItem,
      select,
      onAction,
      getItem,
      getItems,
      matches,
      onItemRegister,
    ],
  );

  return (
    <ListBoxProvider {...contextValue}>
      <ListBoxList
        listRef={listRef}
        selectionMode={selectionMode}
        className={className}
        onKeyDownProp={onKeyDownProp}
        {...rest}
      >
        {children}
      </ListBoxList>
      {itemsVersion > 0 && visibleCount === 0 ? empty : null}
    </ListBoxProvider>
  );
}

function ListBoxList({
  listRef,
  selectionMode,
  className,
  children,
  onKeyDownProp,
  ...rest
}: {
  listRef: React.RefObject<HTMLUListElement | null>;
  selectionMode: ListBoxProps['selectionMode'];
  className?: string;
  children?: React.ReactNode;
  onKeyDownProp?: ListBoxProps['onKeyDown'];
} & Omit<
  ListBoxProps,
  | 'selectionMode'
  | 'value'
  | 'defaultValue'
  | 'onValueChange'
  | 'onAction'
  | 'className'
  | 'children'
  | 'onKeyDown'
>) {
  const { onKeyDown } = useListBoxKeyboard(listRef);

  return (
    <ul
      {...rest}
      ref={listRef}
      role='listbox'
      aria-multiselectable={
        selectionMode === ListBoxSelectionMode.Multiple ? true : undefined
      }
      tabIndex={-1}
      onKeyDown={(event) => {
        onKeyDown(event);
        onKeyDownProp?.(event);
      }}
      className={classNames(
        'mosuk-list-box',
        '@container/list-box',
        'group/list-box',
        styles.listBox,
        className,
      )}
    >
      {children}
    </ul>
  );
}
