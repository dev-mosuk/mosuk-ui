'use client';

import { SelectItemProps } from '@/components/actions/select/.partials/components/item/component.interface';
import styles from '@/components/actions/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectItem({ ...rest }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      {...rest}
      className={classNames('mosuk-select-item', styles.item, rest?.className)}
    >
      {rest?.children}
    </SelectPrimitive.Item>
  );
}
