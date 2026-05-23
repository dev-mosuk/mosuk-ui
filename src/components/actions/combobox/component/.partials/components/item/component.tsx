'use client';

import { ComboboxItemProps } from '@/components/actions/combobox/component/.partials/components/item/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxItem({ ref, ...rest }: ComboboxItemProps) {
  return (
    <ComboboxPrimitive.Item
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-item',
        styles.item,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Item>
  );
}
