'use client';

import { ComboboxRowProps } from '@/components/actions/combobox/component/.partials/components/row/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxRow({ ref, ...rest }: ComboboxRowProps) {
  return (
    <ComboboxPrimitive.Row
      {...rest}
      ref={ref}
      className={classNames('mosuk-combobox-row', styles.row, rest?.className)}
    >
      {rest?.children}
    </ComboboxPrimitive.Row>
  );
}
