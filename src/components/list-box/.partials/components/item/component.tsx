'use client';

import type { ListBoxItemProps } from '@/components/list-box/.partials/components/item/component.interface';
import {
  LIST_BOX_ITEM_DEFAULT_IS_ACTIVE,
  LIST_BOX_ITEM_DEFAULT_IS_DISABLED,
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
  size,
  isDisabled = LIST_BOX_ITEM_DEFAULT_IS_DISABLED,
  isActive = LIST_BOX_ITEM_DEFAULT_IS_ACTIVE,
  className,
  style,
  children,
  onClick,
  onFocus,
  ...rest
}: ListBoxItemProps) {
  const {
    selected,
    variant,
    highlightedId,
    registerItem,
    unregisterItem,
    setHighlightedId,
    select,
    matches,
    onItemRegister,
  } = useListBox();
  const { 'data-active': dataActiveAttr, ...domRest } = rest as typeof rest & {
    'data-active'?: string | boolean;
  };
  const hasDataActive =
    isActive || (dataActiveAttr !== undefined && dataActiveAttr !== false);

  const resolvedTextValue = useMemo(
    () => resolveTextValue(textValue, children),
    [textValue, children],
  );

  const isSelected = selected.includes(id);
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
        {...domRest}
        id={id}
        role='option'
        aria-selected={isSelected}
        aria-disabled={isDisabled || undefined}
        aria-hidden={isHidden || undefined}
        hidden={isHidden || undefined}
        data-list-box-item-id={id}
        data-variant={variant}
        data-size={size != null ? size : undefined}
        data-selected={isSelected || undefined}
        data-active={hasDataActive ? true : undefined}
        data-disabled={isDisabled || undefined}
        tabIndex={highlightedId === id && !isDisabled && !isHidden ? 0 : -1}
        style={
          {
            ...(size != null ? { '--list-box-item-size': size } : null),
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
