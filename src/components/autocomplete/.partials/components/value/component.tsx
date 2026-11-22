'use client';

import type { AutocompleteValueProps } from '@/components/autocomplete/.partials/components/value/component.interface';
import { useAutocomplete } from '@/components/autocomplete/.partials/hooks/hook';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function AutocompleteValue({
  className,
  children,
  ...rest
}: AutocompleteValueProps) {
  const { value, labels, placeholder } = useAutocomplete();
  const isEmpty = value.length === 0;
  const text = value.map((id) => labels[id] ?? id).join(', ');

  return (
    <span
      {...rest}
      data-placeholder={isEmpty || undefined}
      className={classNames(
        'mosuk-autocomplete-value',
        styles.value,
        className,
      )}
    >
      {children ?? (isEmpty ? placeholder : text)}
    </span>
  );
}
