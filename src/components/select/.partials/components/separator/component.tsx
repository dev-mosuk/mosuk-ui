'use client';

import { SelectSeparatorProps } from '@/components/select/.partials/components/separator/component.interface';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectSeparator({ ...rest }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      {...rest}
      className={classNames(
        'mosuk-select-separator',
        styles.separator,
        rest?.className,
      )}
    />
  );
}
