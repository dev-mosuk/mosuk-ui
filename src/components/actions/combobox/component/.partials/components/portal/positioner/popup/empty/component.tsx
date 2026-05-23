'use client';

import { ComboboxPortalPositionerPopupEmptyProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/empty/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupEmpty({
  ...rest
}: ComboboxPortalPositionerPopupEmptyProps) {
  return (
    <Combobox.Empty
      {...rest}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-empty',
        styles.ComboboxPortalPositionerPopupEmpty,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Empty>
  );
}
