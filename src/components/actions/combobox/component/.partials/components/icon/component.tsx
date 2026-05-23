'use client';

import { ComboboxIconProps } from '@/components/actions/combobox/component/.partials/components/icon/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxIcon({ ref, ...rest }: ComboboxIconProps) {
  return (
    <ComboboxPrimitive.Icon
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Icon>
  );
}
