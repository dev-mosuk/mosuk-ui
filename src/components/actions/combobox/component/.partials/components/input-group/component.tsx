'use client';

import { ComboboxInputGroupProps } from '@/components/actions/combobox/component/.partials/components/input-group/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxInputGroup({ ref, ...rest }: ComboboxInputGroupProps) {
  return (
    <ComboboxPrimitive.InputGroup
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-input-group',
        styles.inputGroup,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.InputGroup>
  );
}
