'use client';

import { ComboboxFieldsetValueProps } from '@/components/actions/combobox/component/.partials/components/fieldset/value/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetValue({
  ...rest
}: ComboboxFieldsetValueProps) {
  return (
    <span
      className={classNames(
        'mosuk-combobox-fieldset-value',
        styles.ComboboxFieldsetValue,
      )}
    >
      <Combobox.Value {...rest} />
    </span>
  );
}
