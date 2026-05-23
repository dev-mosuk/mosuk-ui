'use client';

import { ComboboxInputProps } from '@/components/actions/combobox/component/.partials/components/input/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxInput({ ref, ...rest }: ComboboxInputProps) {
  return (
    <Combobox.Input
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-input',
        styles.ComboboxInput,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Input>
  );
}
