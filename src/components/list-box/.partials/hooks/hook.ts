'use client';

import type {
  UseListBoxKeyboardProps,
  UseListBoxProps,
} from '@/components/list-box/.partials/hooks/hook.interface';
import { ListBoxContext } from '@/components/list-box/.partials/providers/context/context';
import {
  type KeyboardEvent,
  type RefObject,
  useCallback,
  useContext,
  useRef,
} from 'react';

const TYPEAHEAD_RESET_MS = 500;
const ITEM_SELECTOR = '[data-list-box-item-id]';

export function useListBox(): UseListBoxProps {
  const context = useContext(ListBoxContext);

  if (!context) {
    throw new Error('useListBox must be used within ListBox');
  }

  return context;
}

function getOrderedIds(list: HTMLUListElement | null): string[] {
  if (!list) {
    return [];
  }

  return Array.from(
    list.querySelectorAll(`${ITEM_SELECTOR}:not([hidden])`),
  ).map((element) => element.getAttribute('data-list-box-item-id')!);
}

function focusItem(list: HTMLUListElement | null, id: string) {
  const element = list?.querySelector(
    `${ITEM_SELECTOR}[data-list-box-item-id="${CSS.escape(id)}"]`,
  );

  if (element instanceof HTMLElement) {
    element.focus();
  }
}

export function useListBoxKeyboard(
  listRef: RefObject<HTMLUListElement | null>,
): UseListBoxKeyboardProps {
  const { highlightedId, setHighlightedId, select, getItem, getItems } =
    useListBox();
  const searchRef = useRef('');
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const moveHighlight = useCallback(
    (nextId: string) => {
      setHighlightedId(nextId);
      focusItem(listRef.current, nextId);
    },
    [listRef, setHighlightedId],
  );

  const findEnabled = useCallback(
    (ids: string[], startIndex: number, step: number) => {
      if (ids.length === 0) {
        return null;
      }

      let index = startIndex;

      for (let attempt = 0; attempt < ids.length; attempt += 1) {
        index = (index + step + ids.length) % ids.length;
        const id = ids[index];
        const item = getItem(id);

        if (item && !item.isDisabled) {
          return id;
        }
      }

      return null;
    },
    [getItem],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLUListElement>) => {
      const ids = getOrderedIds(listRef.current);

      if (ids.length === 0) {
        return;
      }

      const currentIndex = highlightedId ? ids.indexOf(highlightedId) : -1;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const next = findEnabled(ids, currentIndex, 1);

        if (next) {
          moveHighlight(next);
        }

        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        const next = findEnabled(ids, currentIndex, -1);

        if (next) {
          moveHighlight(next);
        }

        return;
      }

      if (event.key === 'Home') {
        event.preventDefault();
        const next = findEnabled(ids, -1, 1);

        if (next) {
          moveHighlight(next);
        }

        return;
      }

      if (event.key === 'End') {
        event.preventDefault();
        const next = findEnabled(ids, 0, -1);

        if (next) {
          moveHighlight(next);
        }

        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        if (!highlightedId) {
          return;
        }

        const item = getItem(highlightedId);

        if (!item || item.isDisabled) {
          return;
        }

        event.preventDefault();
        select(highlightedId);

        return;
      }

      if (
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault();

        if (searchTimeoutRef.current) {
          clearTimeout(searchTimeoutRef.current);
        }

        searchRef.current += event.key.toLowerCase();
        searchTimeoutRef.current = setTimeout(() => {
          searchRef.current = '';
        }, TYPEAHEAD_RESET_MS);

        const query = searchRef.current;
        const items = getItems();
        const startIndex = currentIndex >= 0 ? currentIndex + 1 : 0;

        for (let offset = 0; offset < ids.length; offset += 1) {
          const id = ids[(startIndex + offset) % ids.length];
          const item = items.get(id);

          if (
            item &&
            !item.isDisabled &&
            item.textValue.toLowerCase().startsWith(query)
          ) {
            moveHighlight(id);
            break;
          }
        }
      }
    },
    [
      findEnabled,
      getItem,
      getItems,
      highlightedId,
      listRef,
      moveHighlight,
      select,
    ],
  );

  return {
    listRef,
    onKeyDown,
  };
}
