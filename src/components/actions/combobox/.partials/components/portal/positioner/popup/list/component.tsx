'use client';

import { ComboboxPortalPositionerPopupListProps } from '@/components/actions/combobox/.partials/components/portal/positioner/popup/list/component.interface';
import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupList({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupListProps) {
  return (
    <Combobox.List
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list',
        styles.ComboboxPortalPositionerPopupList,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.List>
  );
}
