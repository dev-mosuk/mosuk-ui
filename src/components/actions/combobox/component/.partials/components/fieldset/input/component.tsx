'use client';

import { ComboboxFieldsetInputProps } from '@/components/actions/combobox/component/.partials/components/fieldset/input/component.interface';
import ComboboxStyles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import InputStyles from '@/components/actions/input/component/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetInput({ ...rest }: ComboboxFieldsetInputProps) {
  return (
    <Combobox.Input
      {...rest}
      placeholder={rest?.placeholder ?? 'Поиск'}
      className={classNames(
        'mosuk-combobox-fieldset-input',
        InputStyles.input,
        ComboboxStyles.ComboboxFieldsetInput,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Input>
  );
}
