'use client';

import { ComboboxPortalPositionerPopupListSeparatorProps } from '@/components/actions/combobox/.partials/components/portal/positioner/popup/list/separator/component.interface';
import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListSeparator({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupListSeparatorProps) {
  return (
    <Combobox.Separator
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-separator',
        styles.ComboboxPortalPositionerPopupListSeparator,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Separator>
  );
}
