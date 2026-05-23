'use client';

import { ComboboxGroupProps } from '@/components/actions/combobox/component/.partials/components/group/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxGroup({ ref, ...rest }: ComboboxGroupProps) {
  return (
    <ComboboxPrimitive.Group
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-group',
        styles.group,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Group>
  );
}
