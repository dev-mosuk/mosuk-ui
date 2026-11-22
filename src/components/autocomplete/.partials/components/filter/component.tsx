'use client';

import type {
  AutocompleteFilterFn,
  AutocompleteFilterProps,
} from '@/components/autocomplete/.partials/components/filter/component.interface';
import { useAutocomplete } from '@/components/autocomplete/.partials/hooks/hook';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import { Input } from '@/components/input';
import { ListBox } from '@/components/list-box';
import classNames from 'classnames';
import React, {
  type ChangeEvent,
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react';

function defaultFilter(textValue: string, query: string) {
  const normalized = query.trim().toLocaleLowerCase();

  if (!normalized) {
    return true;
  }

  return textValue.toLocaleLowerCase().includes(normalized);
}

export function AutocompleteFilter({
  filter = defaultFilter,
  empty,
  className,
  children,
  ...rest
}: AutocompleteFilterProps) {
  const {
    query,
    onQueryChange,
    isDisabled,
    selectionMode,
    value,
    onValueChange,
    rememberItem,
  } = useAutocomplete();

  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-autocomplete-filter',
        styles.filter,
        className,
      )}
    >
      {Children.map(children, (child) =>
        bindFilterChild(child, {
          filter,
          empty,
          query,
          onQueryChange,
          isDisabled,
          selectionMode,
          value,
          onValueChange,
          rememberItem,
        }),
      )}
    </div>
  );
}

function bindFilterChild(
  child: React.ReactNode,
  state: {
    filter: AutocompleteFilterFn;
    empty?: React.ReactNode;
    query: string;
    onQueryChange: (query: string) => void;
    isDisabled?: boolean;
    selectionMode: NonNullable<ListBox.Props['selectionMode']>;
    value: string[];
    onValueChange: (value: string[]) => void;
    rememberItem: (item: { id: string; textValue: string }) => void;
  },
) {
  if (!isValidElement(child)) {
    return child;
  }

  if (child.type === Input) {
    const input = child as ReactElement<Input.Props>;

    return cloneElement(input, {
      value: state.query,
      isDisabled: state.isDisabled || input.props.isDisabled,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        input.props.onChange?.(event);
        state.onQueryChange(event.currentTarget.value);
      },
    });
  }

  if (child.type === ListBox) {
    const list = child as ReactElement<ListBox.Props>;

    return cloneElement(list, {
      selectionMode: state.selectionMode,
      value: state.value,
      onValueChange: (next: string[]) => {
        list.props.onValueChange?.(next);
        state.onValueChange(next);
      },
      matches: (item) => state.filter(item.textValue, state.query),
      onItemRegister: state.rememberItem,
      empty:
        state.empty === undefined ? undefined : (
          <div className={styles.empty}>{state.empty}</div>
        ),
    });
  }

  return child;
}
