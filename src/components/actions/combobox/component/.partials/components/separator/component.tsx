'use client';

import { ComboboxSeparatorProps } from '@/components/actions/combobox/component/.partials/components/separator/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxSeparator({ ref, ...rest }: ComboboxSeparatorProps) {
  return (
    <ComboboxPrimitive.Separator
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-separator',
        styles.separator,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Separator>
  );
}
