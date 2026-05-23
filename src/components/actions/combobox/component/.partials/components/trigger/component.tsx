'use client';

import { ComboboxTriggerProps } from '@/components/actions/combobox/component/.partials/components/trigger/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxTrigger({ ...rest }: ComboboxTriggerProps) {
  return (
    <Combobox.Trigger
      {...rest}
      className={classNames(
        'mosuk-combobox-trigger',
        styles.ComboboxTrigger,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Trigger>
  );
}
