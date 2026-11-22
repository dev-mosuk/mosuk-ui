'use client';

import type { AutocompleteClearProps } from '@/components/autocomplete/.partials/components/clear/component.interface';
import { useAutocomplete } from '@/components/autocomplete/.partials/hooks/hook';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import classNames from 'classnames';
import { X } from 'lucide-react';
import React from 'react';

export function AutocompleteClear({
  className,
  children,
  onPointerDown,
  onClick,
  ...rest
}: AutocompleteClearProps) {
  const { clear, value, isDisabled } = useAutocomplete();
  const isEmpty = value.length === 0;

  return (
    <span
      {...rest}
      aria-hidden
      hidden={isEmpty || undefined}
      className={classNames(
        'mosuk-autocomplete-clear',
        styles.clear,
        className,
      )}
      onPointerDown={(event) => {
        onPointerDown?.(event);

        if (event.defaultPrevented || isDisabled || isEmpty) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        clear();
      }}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {children ?? <X className={styles.icon} />}
    </span>
  );
}
