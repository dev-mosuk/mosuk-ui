'use client';

import { ComboboxFieldsetIconProps } from '@/components/actions/combobox/component/.partials/components/fieldset/icon/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxFieldsetIcon({
  ref,
  ...rest
}: ComboboxFieldsetIconProps) {
  return (
    <Combobox.Icon
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-fieldset-icon',
        styles.ComboboxFieldsetIcon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Icon>
  );
}
