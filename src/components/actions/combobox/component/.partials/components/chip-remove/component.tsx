'use client';

import { ComboboxChipRemoveProps } from '@/components/actions/combobox/component/.partials/components/chip-remove/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxChipRemove({ ref, ...rest }: ComboboxChipRemoveProps) {
  return (
    <ComboboxPrimitive.ChipRemove
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-chip-remove',
        styles.chipRemove,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.ChipRemove>
  );
}
