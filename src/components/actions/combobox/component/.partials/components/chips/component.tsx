'use client';

import { ComboboxChipsProps } from '@/components/actions/combobox/component/.partials/components/chips/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxChips({ ref, ...rest }: ComboboxChipsProps) {
  return (
    <ComboboxPrimitive.Chips
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-chips',
        styles.chips,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Chips>
  );
}
