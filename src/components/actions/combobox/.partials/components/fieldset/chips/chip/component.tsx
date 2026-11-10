'use client';

import { ComboboxFieldsetChipsChipProps } from '@/components/actions/combobox/.partials/components/fieldset/chips/chip/component.interface';
import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetChipsChip({
  ref,
  ...rest
}: ComboboxFieldsetChipsChipProps) {
  return (
    <Combobox.Chip
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-fieldset-chips-chip',
        styles.ComboboxFieldsetChipsChip,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Chip>
  );
}
