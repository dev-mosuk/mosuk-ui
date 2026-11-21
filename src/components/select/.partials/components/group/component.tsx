'use client';

import { SelectGroupProps } from '@/components/actions/select/.partials/components/group/component.interface';
import styles from '@/components/actions/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectGroup({ ...rest }: SelectGroupProps) {
  return (
    <SelectPrimitive.Group
      {...rest}
      className={classNames(
        'mosuk-select-group',
        styles.group,
        rest?.className,
      )}
    >
      {rest?.children}
    </SelectPrimitive.Group>
  );
}
