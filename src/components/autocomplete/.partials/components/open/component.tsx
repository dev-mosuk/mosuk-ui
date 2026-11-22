'use client';

import type { AutocompleteOpenProps } from '@/components/autocomplete/.partials/components/open/component.interface';
import { useAutocomplete } from '@/components/autocomplete/.partials/hooks/hook';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import { Dropdown } from '@/components/dropdown';
import classNames from 'classnames';
import React from 'react';

function isTypeableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
  );
}

export function AutocompleteOpen({
  className,
  children,
  onFocusCapture,
  onPointerDownCapture,
  ...rest
}: AutocompleteOpenProps) {
  const { isOpen, onOpenChange, isDisabled, noteFieldPress } =
    useAutocomplete();

  return (
    <Dropdown.Open
      {...rest}
      nativeButton={false}
      isDisabled={isDisabled}
      render={<div />}
      className={classNames(
        'mosuk-autocomplete',
        '@container/autocomplete',
        'group/autocomplete',
        styles.autocomplete,
        className,
      )}
      onPointerDownCapture={(event) => {
        onPointerDownCapture?.(event);

        if (isTypeableTarget(event.target)) {
          noteFieldPress();
        }
      }}
      onFocusCapture={(event) => {
        onFocusCapture?.(event);

        if (isDisabled || isOpen || event.defaultPrevented) {
          return;
        }

        if (isTypeableTarget(event.target)) {
          onOpenChange(true);
        }
      }}
    >
      {children}
    </Dropdown.Open>
  );
}
