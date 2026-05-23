'use client';

import { ComboboxPortalPositionerPopupListGroupLabelProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/list/group/label/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListGroupLabel({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupListGroupLabelProps) {
  return (
    <Combobox.GroupLabel
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-group-label',
        styles.ComboboxPortalPositionerPopupListGroupLabel,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.GroupLabel>
  );
}
