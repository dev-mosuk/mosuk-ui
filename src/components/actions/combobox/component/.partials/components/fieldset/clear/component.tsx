'use client';

import { ComboboxFieldsetClearProps } from '@/components/actions/combobox/component/.partials/components/fieldset/clear/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetClear({
  ...rest
}: ComboboxFieldsetClearProps) {
  return (
    <Combobox.Clear
      {...rest}
      className={classNames(
        'mosuk-combobox-fieldset-clear',
        styles.ComboboxFieldsetClear,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Clear>
  );
}
