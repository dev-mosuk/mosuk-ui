'use client';

import { ComboboxPortalPositionerPopupListItemIndicatorProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/list/item/indicator/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListItemIndicator({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupListItemIndicatorProps) {
  return (
    <Combobox.ItemIndicator
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-item-indicator',
        styles.ComboboxPortalPositionerPopupListItemIndicator,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.ItemIndicator>
  );
}
