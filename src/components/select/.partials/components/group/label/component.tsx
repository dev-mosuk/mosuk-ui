'use client';

import { SelectGroupLabelProps } from '@/components/select/.partials/components/group/label/component.interface';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectGroupLabel({ ...rest }: SelectGroupLabelProps) {
  return (
    <SelectPrimitive.GroupLabel
      {...rest}
      className={classNames(
        'mosuk-select-group-label',
        styles.groupLabel,
        rest?.className,
      )}
    >
      {rest?.children}
    </SelectPrimitive.GroupLabel>
  );
}
