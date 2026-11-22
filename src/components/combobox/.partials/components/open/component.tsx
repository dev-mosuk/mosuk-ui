'use client';

import type { ComboboxOpenProps } from '@/components/combobox/.partials/components/open/component.interface';
import { useCombobox } from '@/components/combobox/.partials/hooks/hook';
import styles from '@/components/combobox/.partials/styles/component.module.css';
import { Dropdown } from '@/components/dropdown';
import classNames from 'classnames';
import React from 'react';

function isTypeableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
  );
}

export function ComboboxOpen({
  className,
  children,
  onFocusCapture,
  onPointerDownCapture,
  ...rest
}: ComboboxOpenProps) {
  const { isOpen, onOpenChange, isDisabled, noteFieldPress } = useCombobox();

  return (
    <Dropdown.Open
      {...rest}
      nativeButton={false}
      isDisabled={isDisabled}
      render={<div />}
      className={classNames('mosuk-combobox-field', styles.field, className)}
      onPointerDownCapture={(event) => {
        onPointerDownCapture?.(event);
        noteFieldPress();
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
