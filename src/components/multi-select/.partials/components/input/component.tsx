'use client';

import type { MultiSelectInputProps } from '@/components/multi-select/.partials/components/input/component.interface';
import { useMultiSelect } from '@/components/multi-select/.partials/hooks/hook';
import styles from '@/components/multi-select/.partials/styles/component.module.css';
import { Input } from '@/components/input';
import classNames from 'classnames';
import React, { type ChangeEvent, type KeyboardEvent } from 'react';

export function MultiSelectInput({
  className,
  isDisabled: isDisabledProp,
  placeholder: placeholderProp,
  onFocus,
  onClick,
  onChange,
  onKeyDown,
  ...rest
}: MultiSelectInputProps) {
  const {
    selected,
    placeholder,
    isDisabled,
    isOpen,
    query,
    onQueryChange,
    onOpenChange,
    noteFieldPress,
    removeSelected,
  } = useMultiSelect();
  const locked = Boolean(isDisabledProp ?? isDisabled);

  return (
    <Input
      {...rest}
      isFocused={isOpen}
      value={query}
      placeholder={placeholderProp ?? placeholder}
      isDisabled={locked}
      className={classNames(
        'mosuk-multi-select-input',
        styles.input,
        className,
      )}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);

        if (event.defaultPrevented || locked) {
          return;
        }

        onQueryChange(event.currentTarget.value);

        if (!isOpen) {
          onOpenChange(true);
        }
      }}
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(event);

        if (event.defaultPrevented || locked) {
          return;
        }

        if (
          event.key === 'Backspace' &&
          event.currentTarget.value === '' &&
          selected.length > 0
        ) {
          event.preventDefault();
          removeSelected(selected[selected.length - 1]!);
        }
      }}
      onFocus={(event) => {
        onFocus?.(event);

        if (event.defaultPrevented || locked) {
          return;
        }

        noteFieldPress();

        if (!isOpen) {
          onOpenChange(true);
        }
      }}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented || locked) {
          return;
        }

        noteFieldPress();

        if (!isOpen) {
          onOpenChange(true);
        }
      }}
    />
  );
}
