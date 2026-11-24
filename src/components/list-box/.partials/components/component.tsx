'use client';

import type { ListBoxProps } from '@/components/list-box/.partials/components/component.interface';
import {
  LIST_BOX_DEFAULT_MODE,
  LIST_BOX_DEFAULT_VARIANT,
} from '@/components/list-box/.partials/constants/component.constants';
import { ListBoxMode } from '@/components/list-box/.partials/enums/component.enums';
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
  selected: selectedProp,
  defaultSelected,
  onSelectChange,
  mode = LIST_BOX_DEFAULT_MODE,
  variant = LIST_BOX_DEFAULT_VARIANT,
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
  const isControlled = selectedProp !== undefined;
  const [uncontrolledSelected, setUncontrolledSelected] = useState<string[]>(
    defaultSelected ?? [],
  );
  const selected = isControlled ? (selectedProp ?? []) : uncontrolledSelected;
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

  const commitSelected = useCallback(
    (next: string[]) => {
      if (!isControlled) {
        setUncontrolledSelected(next);
      }

      onSelectChange?.(next);
    },
    [isControlled, onSelectChange],
  );

  const select = useCallback(
    (id: string) => {
      const item = itemsRef.current.get(id);

      if (!item || item.isDisabled) {
        return;
      }

      onAction?.(id);

      if (mode === ListBoxMode.Multiple) {
        const next = selected.includes(id)
          ? selected.filter((entry) => entry !== id)
          : [...selected, id];
        commitSelected(next);

        return;
      }

      commitSelected(
        selected.includes(id) && selected.length === 1 ? selected : [id],
      );
    },
    [commitSelected, mode, onAction, selected],
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

    const firstSelected = selected.find((id) => isVisible(id));

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
  }, [highlightedId, matches, selected, itemsVersion]);

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
      mode,
      variant,
      selected,
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
      mode,
      variant,
      selected,
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
        mode={mode}
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
  mode,
  className,
  children,
  onKeyDownProp,
  ...rest
}: {
  listRef: React.RefObject<HTMLUListElement | null>;
  mode: ListBoxProps['mode'];
  className?: string;
  children?: React.ReactNode;
  onKeyDownProp?: ListBoxProps['onKeyDown'];
} & Omit<
  ListBoxProps,
  | 'selected'
  | 'defaultSelected'
  | 'onSelectChange'
  | 'mode'
  | 'variant'
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
        mode === ListBoxMode.Multiple ? true : undefined
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
