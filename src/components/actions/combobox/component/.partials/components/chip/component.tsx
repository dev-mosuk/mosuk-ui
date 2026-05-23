'use client';

import { ComboboxChipProps } from '@/components/actions/combobox/component/.partials/components/chip/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxChip({ ref, ...rest }: ComboboxChipProps) {
  return (
    <ComboboxPrimitive.Chip
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-chip',
        styles.chip,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Chip>
  );
}
