'use client';

import { ComboboxItemIndicatorProps } from '@/components/actions/combobox/component/.partials/components/item/indicator/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxItemIndicator({
  ref,
  ...rest
}: ComboboxItemIndicatorProps) {
  return (
    <ComboboxPrimitive.ItemIndicator
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-item-indicator',
        styles.itemIndicator,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.ItemIndicator>
  );
}
