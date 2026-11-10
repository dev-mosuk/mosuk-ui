import { DropdownDropdownProps } from '@/components/overlays/dropdown/.partials/components/dropdown/component.interface';
import styles from '@/components/overlays/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownDropdown({
  container,
  ...rest
}: DropdownDropdownProps) {
  return (
    <Popover.Portal container={container ?? undefined}>
      <Popover.Positioner
        {...rest}
        className={classNames(
          'mosuk-dropdown-dropdown',
          styles.dropdown,
          rest?.className,
        )}
      >
        {rest?.children}
      </Popover.Positioner>
    </Popover.Portal>
  );
}
