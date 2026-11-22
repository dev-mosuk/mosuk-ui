'use client';

import type { ComboboxOverviewPopupProps } from '@/components/combobox/.partials/components/overview-popup/component.interface';
import styles from '@/components/combobox/.partials/styles/component.module.css';
import { Dropdown } from '@/components/dropdown';
import classNames from 'classnames';
import React from 'react';

export function ComboboxOverviewPopup({
  className,
  initialFocus = false,
  finalFocus = false,
  ...rest
}: ComboboxOverviewPopupProps) {
  return (
    <Dropdown.Overview.Popup
      {...rest}
      initialFocus={initialFocus}
      finalFocus={finalFocus}
      className={classNames(
        'mosuk-combobox-dropdown-content',
        styles.content,
        className,
      )}
    />
  );
}
