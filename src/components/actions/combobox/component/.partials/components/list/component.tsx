'use client';

import { ComboboxListProps } from '@/components/actions/combobox/component/.partials/components/list/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxList({ ref, ...rest }: ComboboxListProps) {
  return (
    <Combobox.List
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-list',
        styles.ComboboxList,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.List>
  );
}
