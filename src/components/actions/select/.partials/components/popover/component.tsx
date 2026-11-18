'use client';

import { SelectPopoverProps } from '@/components/actions/select/.partials/components/popover/component.interface';
import styles from '@/components/actions/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectPopover({ ...rest }: SelectPopoverProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner sideOffset={4} className={styles.positioner}>
        <SelectPrimitive.Popup
          {...rest}
          className={classNames(
            'mosuk-select-popover',
            styles.popup,
            rest?.className,
          )}
        >
          {rest?.children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}
