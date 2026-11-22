'use client';

import type { AutocompleteOverviewProps } from '@/components/autocomplete/.partials/components/overview/component.interface';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import { Dropdown } from '@/components/dropdown';
import classNames from 'classnames';
import React from 'react';

export function AutocompleteOverview({
  className,
  ...rest
}: AutocompleteOverviewProps) {
  return (
    <Dropdown.Overview
      {...rest}
      className={classNames(
        'mosuk-autocomplete-dropdown',
        styles.dropdown,
        className,
      )}
    />
  );
}
