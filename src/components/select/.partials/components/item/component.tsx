'use client';

import { SelectItemProps } from '@/components/select/.partials/components/item/component.interface';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectItem({
  isDisabled,
  className,
  children,
  ...rest
}: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      {...rest}
      disabled={isDisabled}
      className={classNames('mosuk-select-item', styles.item, className)}
    >
      {children}
    </SelectPrimitive.Item>
  );
}
