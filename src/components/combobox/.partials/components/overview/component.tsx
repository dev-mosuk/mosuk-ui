'use client';

import type { ComboboxOverviewProps } from '@/components/combobox/.partials/components/overview/component.interface';
import styles from '@/components/combobox/.partials/styles/component.module.css';
import { Dropdown } from '@/components/dropdown';
import classNames from 'classnames';
import React from 'react';

export function ComboboxOverview({
  className,
  ...rest
}: ComboboxOverviewProps) {
  return (
    <Dropdown.Overview
      {...rest}
      className={classNames(
        'mosuk-combobox-dropdown',
        styles.dropdown,
        className,
      )}
    />
  );
}
