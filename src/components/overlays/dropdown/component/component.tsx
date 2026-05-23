import {
  DropdownDropdownContentProps,
  DropdownDropdownProps,
  DropdownProps,
  DropdownTriggerProps,
} from '@/components/overlays/dropdown/component/component.interface';
import styles from '@/components/overlays/dropdown/component/component.module.css';
import { Popover } from '@base-ui/react/popover';
import React from 'react';

export function Dropdown({ ...props }: DropdownProps) {
  return <Popover.Root {...props}>{props?.children}</Popover.Root>;
}

export function DropdownTrigger({ className, ...props }: DropdownTriggerProps) {
  return (
    <Popover.Trigger
      className={`mosuk-dropdown-trigger ${styles.trigger} ${className ?? ''}`}
      {...props}
    >
      {props?.children}
    </Popover.Trigger>
  );
}

export function DropdownDropdown({
  container,
  ...props
}: DropdownDropdownProps) {
  return (
    <Popover.Portal container={container ?? undefined}>
      <Popover.Positioner {...props}>{props?.children}</Popover.Positioner>
    </Popover.Portal>
  );
}

export function DropdownDropdownContent({
  className,
  ...props
}: DropdownDropdownContentProps) {
  return (
    <Popover.Popup
      className={
        'mosuk-dropdown-content' +
        ' ' +
        (styles.content ?? '') +
        ' ' +
        (className ?? '')
      }
      {...props}
    >
      {props?.children}
    </Popover.Popup>
  );
}
