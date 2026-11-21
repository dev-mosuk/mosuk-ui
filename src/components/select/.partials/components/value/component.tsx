'use client';

import { SelectValueProps } from '@/components/actions/select/.partials/components/value/component.interface';
import { useSelect } from '@/components/actions/select/.partials/hooks/hook';
import styles from '@/components/actions/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectValue({ ...rest }: SelectValueProps) {
  const { placeholder } = useSelect();

  return (
    <SelectPrimitive.Value
      {...rest}
      placeholder={rest?.placeholder ?? placeholder}
      className={classNames(
        'mosuk-select-value',
        styles.value,
        rest?.className,
      )}
    >
      {rest?.children}
    </SelectPrimitive.Value>
  );
}
