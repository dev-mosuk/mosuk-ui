'use client';

import { ComboboxPortalPositionerPopupListItemProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/list/item/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListItem({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupListItemProps) {
  return (
    <Combobox.Item
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-item',
        styles.ComboboxPortalPositionerPopupListItem,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Item>
  );
}
