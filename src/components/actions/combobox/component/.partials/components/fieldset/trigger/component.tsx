'use client';

import { ComboboxFieldsetTriggerProps } from '@/components/actions/combobox/component/.partials/components/fieldset/trigger/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetTrigger({
  ...rest
}: ComboboxFieldsetTriggerProps) {
  return (
    <Combobox.Trigger
      {...rest}
      className={classNames(
        'mosuk-combobox-fieldset-trigger',
        styles.ComboboxFieldsetTrigger,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Trigger>
  );
}
