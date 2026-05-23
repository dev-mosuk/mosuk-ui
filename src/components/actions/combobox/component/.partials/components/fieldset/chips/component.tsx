'use client';

import { ComboboxFieldsetChipsProps } from '@/components/actions/combobox/component/.partials/components/fieldset/chips/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetChips({
  ref,
  ...rest
}: ComboboxFieldsetChipsProps) {
  return (
    <Combobox.Chips
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-fieldset-chips',
        styles.ComboboxFieldsetChips,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Chips>
  );
}
