'use client';

import { ComboboxPortalPositionerPopupListGroupProps } from '@/components/actions/combobox/.partials/components/portal/positioner/popup/list/group/component.interface';
import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListGroup({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupListGroupProps) {
  return (
    <Combobox.Group
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-group',
        styles.ComboboxPortalPositionerPopupListGroup,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Group>
  );
}
