import { Popover } from '@base-ui-components/react/popover';
import React from 'react';
import {
  DropdownDropdownContentProps,
  DropdownDropdownProps,
  DropdownProps,
  DropdownTriggerProps,
} from './component.interface';
import styles from './component.module.css';

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
      <Popover.Positioner
        {...props}
        align={props?.align ?? 'start'}
        alignOffset={props?.alignOffset ?? 0}
        side={props?.side ?? 'bottom'}
        sideOffset={props?.sideOffset ?? 8}
      >
        {props?.children}
      </Popover.Positioner>
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
