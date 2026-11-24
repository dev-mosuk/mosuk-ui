'use client';

import type { SelectInputProps } from '@/components/select/.partials/components/input/component.interface';
import { SelectMode } from '@/components/select/.partials/enums/component.enums';
import { useSelect } from '@/components/select/.partials/hooks/hook';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Input } from '@/components/input';
import classNames from 'classnames';
import React, { type ChangeEvent } from 'react';

export function SelectInput({
  className,
  isDisabled: isDisabledProp,
  placeholder: placeholderProp,
  onFocus,
  onClick,
  onChange,
  ...rest
}: SelectInputProps) {
  const {
    selected,
    labels,
    placeholder,
    isDisabled,
    isOpen,
    mode,
    query,
    onQueryChange,
    onOpenChange,
    noteFieldPress,
  } = useSelect();
  const locked = Boolean(isDisabledProp ?? isDisabled);
  const isEmpty = selected.length === 0;
  const selectedText = selected.map((id) => labels[id] ?? id).join(', ');
  const isSearch = mode === SelectMode.Search;
  const value = isSearch
    ? isOpen
      ? query
      : isEmpty
        ? ''
        : selectedText
    : isEmpty
      ? ''
      : selectedText;

  return (
    <Input
      {...rest}
      isReadOnly={!isSearch}
      isFocused={isOpen}
      value={value}
      placeholder={placeholderProp ?? placeholder}
      isDisabled={locked}
      className={classNames('mosuk-select-input', styles.input, className)}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);

        if (event.defaultPrevented || locked || !isSearch) {
          return;
        }

        onQueryChange(event.currentTarget.value);

        if (!isOpen) {
          onOpenChange(true);
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
