'use client';

import { ComboboxFieldsetProps } from '@/components/actions/combobox/component/.partials/components/fieldset/component.interface';
import ComboboxStyles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldset({ ...rest }: ComboboxFieldsetProps) {
  return (
    <Combobox.InputGroup
      {...rest}
      className={classNames(
        'mosuk-combobox-fieldset',
        ComboboxStyles.ComboboxFieldset,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.InputGroup>
  );
}
