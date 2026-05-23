'use client';

import { ComboboxBackdropProps } from '@/components/actions/combobox/component/.partials/components/backdrop/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxBackdrop({ ref, ...rest }: ComboboxBackdropProps) {
  return (
    <ComboboxPrimitive.Backdrop
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-backdrop',
        styles.backdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Backdrop>
  );
}
