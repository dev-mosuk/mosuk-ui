'use client';

import type { AutocompleteOverviewPopupProps } from '@/components/autocomplete/.partials/components/overview-popup/component.interface';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import { Dropdown } from '@/components/dropdown';
import classNames from 'classnames';
import React from 'react';

export function AutocompleteOverviewPopup({
  className,
  initialFocus = false,
  finalFocus = false,
  ...rest
}: AutocompleteOverviewPopupProps) {
  return (
    <Dropdown.Overview.Popup
      {...rest}
      initialFocus={initialFocus}
      finalFocus={finalFocus}
      className={classNames(
        'mosuk-autocomplete-dropdown-content',
        styles.content,
        className,
      )}
    />
  );
}
