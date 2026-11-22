'use client';

import type { ListBoxItemProps } from '@/components/list-box/.partials/components/item/component.interface';
import {
  LIST_BOX_ITEM_DEFAULT_SIZE,
  LIST_BOX_ITEM_DEFAULT_VARIANT,
} from '@/components/list-box/.partials/constants/component.constants';
import { useListBox } from '@/components/list-box/.partials/hooks/hook';
import { ListBoxItemContext } from '@/components/list-box/.partials/providers/context/item-context';
import styles from '@/components/list-box/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, useEffect, useMemo } from 'react';

function resolveTextValue(
  textValue: string | undefined,
  children: React.ReactNode,
): string {
  if (textValue !== undefined) {
    return textValue;
  }

  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children
      .map((child) => resolveTextValue(undefined, child))
      .filter(Boolean)
      .join(' ');
  }

  return '';
}

export function ListBoxItem({
  id,
  textValue,
  size = LIST_BOX_ITEM_DEFAULT_SIZE,
  variant = LIST_BOX_ITEM_DEFAULT_VARIANT,
  isDisabled = false,
  className,
  style,
  children,
  onClick,
  onFocus,
  ...rest
}: ListBoxItemProps) {
  const {
    value,
    highlightedId,
    registerItem,
    unregisterItem,
    setHighlightedId,
    select,
    matches,
    onItemRegister,
  } = useListBox();

  const resolvedTextValue = useMemo(
    () => resolveTextValue(textValue, children),
    [textValue, children],
  );

  const isSelected = value.includes(id);
  const isHidden = Boolean(
    matches && !matches({ id, textValue: resolvedTextValue }),
  );

  useEffect(() => {
    registerItem({
      id,
      textValue: resolvedTextValue,
      isDisabled,
    });
    onItemRegister?.({ id, textValue: resolvedTextValue });

    return () => {
      unregisterItem(id);
    };
  }, [
    id,
    resolvedTextValue,
    isDisabled,
    registerItem,
    unregisterItem,
    onItemRegister,
  ]);

  const itemContext = useMemo(
    () => ({
      id,
      isSelected,
    }),
    [id, isSelected],
  );

  return (
    <ListBoxItemContext.Provider value={itemContext}>
      <li
        {...rest}
        id={id}
        role='option'
        aria-selected={isSelected}
        aria-disabled={isDisabled || undefined}
        aria-hidden={isHidden || undefined}
        hidden={isHidden || undefined}
        data-list-box-item-id={id}
        data-variant={variant}
        data-size={size}
        data-selected={isSelected || undefined}
        data-disabled={isDisabled || undefined}
        tabIndex={highlightedId === id && !isDisabled && !isHidden ? 0 : -1}
        style={
          {
            '--list-box-item-size': size,
            ...style,
          } as CSSProperties
        }
        onClick={(event) => {
          if (isDisabled || isHidden) {
            return;
          }

          setHighlightedId(id);
          select(id);
          onClick?.(event);
        }}
        onFocus={(event) => {
          if (!isDisabled && !isHidden) {
            setHighlightedId(id);
          }

          onFocus?.(event);
        }}
        className={classNames('mosuk-list-box-item', styles.item, className)}
      >
        {children}
      </li>
    </ListBoxItemContext.Provider>
  );
}
