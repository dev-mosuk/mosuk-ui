'use client';

import { ComboboxArrowProps } from '@/components/actions/combobox/component/.partials/components/arrow/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxArrow({ ref, ...rest }: ComboboxArrowProps) {
  return (
    <ComboboxPrimitive.Arrow
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-arrow',
        styles.arrow,
        rest?.className,
      )}
    >
      {rest?.children}
    </ComboboxPrimitive.Arrow>
  );
}
