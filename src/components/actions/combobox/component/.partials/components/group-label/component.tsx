'use client';

import { ComboboxGroupLabelProps } from '@/components/actions/combobox/component/.partials/components/group-label/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxGroupLabel({ ref, ...rest }: ComboboxGroupLabelProps) {
  return (
    <ComboboxPrimitive.GroupLabel
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-group-label',
        styles.groupLabel,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.GroupLabel>
  );
}
