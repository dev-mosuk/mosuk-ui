'use client';

import { SelectListProps } from '@/components/select/.partials/components/list/component.interface';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectList({ ...rest }: SelectListProps) {
  return (
    <SelectPrimitive.List
      {...rest}
      className={classNames('mosuk-select-list', styles.list, rest?.className)}
    >
      {rest?.children}
    </SelectPrimitive.List>
  );
}
