'use client';

import type { SelectOpenProps } from '@/components/select/.partials/components/open/component.interface';
import { useSelect } from '@/components/select/.partials/hooks/hook';
import styles from '@/components/select/.partials/styles/component.module.css';
import { InputGroup } from '@/components/input-group';
import { Popover } from '@/components/popover';
import classNames from 'classnames';
import React from 'react';

function isTypeableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
  );
}

export function SelectOpen({
  className,
  children,
  variant,
  size,
  onFocusCapture,
  onPointerDownCapture,
  ...rest
}: SelectOpenProps) {
  const { isOpen, onOpenChange, isDisabled, noteFieldPress } = useSelect();

  return (
    <Popover.Open
      {...rest}
      as='div'
      isDisabled={isDisabled}
      className={classNames(
        'mosuk-select',
        'group/select',
        styles.select,
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
      <InputGroup
        variant={variant}
        size={size}
        isDisabled={isDisabled}
        className={styles.group}
      >
        {children}
      </InputGroup>
    </Popover.Open>
  );
}
