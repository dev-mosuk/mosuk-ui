'use client';

import { ComboboxClearProps } from '@/components/actions/combobox/component/.partials/components/clear/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxClear({ ...rest }: ComboboxClearProps) {
  return (
    <Combobox.Clear
      {...rest}
      className={classNames(
        'mosuk-combobox-clear',
        styles.ComboboxClear,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Clear>
  );
}
