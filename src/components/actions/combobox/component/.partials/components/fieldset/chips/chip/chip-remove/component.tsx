'use client';

import { ComboboxFieldsetChipsChipChipRemoveProps } from '@/components/actions/combobox/component/.partials/components/fieldset/chips/chip/chip-remove/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetChipsChipChipRemove({
  ref,
  ...rest
}: ComboboxFieldsetChipsChipChipRemoveProps) {
  return (
    <Combobox.ChipRemove
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-fieldset-chips-chip-chip-remove',
        styles.ComboboxFieldsetChipsChipChipRemove,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.ChipRemove>
  );
}
