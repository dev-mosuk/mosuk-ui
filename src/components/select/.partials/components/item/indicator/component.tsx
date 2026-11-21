'use client';

import { SelectItemIndicatorProps } from '@/components/select/.partials/components/item/indicator/component.interface';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import { Check } from 'lucide-react';
import React from 'react';

export function SelectItemIndicator({ ...rest }: SelectItemIndicatorProps) {
  return (
    <SelectPrimitive.ItemIndicator
      {...rest}
      keepMounted={rest?.keepMounted ?? true}
      className={classNames(
        'mosuk-select-item-indicator',
        styles.itemIndicator,
        rest?.className,
      )}
    >
      {rest?.children ?? <Check className={styles.icon} />}
    </SelectPrimitive.ItemIndicator>
  );
}
