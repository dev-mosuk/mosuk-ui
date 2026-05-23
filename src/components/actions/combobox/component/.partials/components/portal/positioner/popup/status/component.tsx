'use client';

import { ComboboxPortalPositionerPopupStatusProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/status/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupStatus({
  ...rest
}: ComboboxPortalPositionerPopupStatusProps) {
  return (
    <Combobox.Status
      {...rest}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-status',
        styles.ComboboxPortalPositionerPopupStatus,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Status>
  );
}
