'use client';

import { ComboboxPortalPositionerPopupArrowProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/arrow/component.interface';
import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupArrow({
  ref,
  ...rest
}: ComboboxPortalPositionerPopupArrowProps) {
  return (
    <Combobox.Arrow
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-arrow',
        styles.ComboboxPortalPositionerPopupArrow,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Arrow>
  );
}
