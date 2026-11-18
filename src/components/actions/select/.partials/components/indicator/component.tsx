'use client';

import { SelectIndicatorProps } from '@/components/actions/select/.partials/components/indicator/component.interface';
import styles from '@/components/actions/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export function SelectIndicator({ ...rest }: SelectIndicatorProps) {
  return (
    <SelectPrimitive.Icon
      {...rest}
      className={classNames(
        'mosuk-select-indicator',
        styles.indicator,
        rest?.className,
      )}
    >
      {rest?.children ?? <ChevronDown className={styles.icon} />}
    </SelectPrimitive.Icon>
  );
}
