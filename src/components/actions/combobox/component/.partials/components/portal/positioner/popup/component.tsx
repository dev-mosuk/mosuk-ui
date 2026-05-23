'use client';

import { ComboboxPortalPositionerPopupProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopup({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupProps) {
  return (
    <Combobox.Popup
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup',
        styles.popup,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Popup>
  );
}
