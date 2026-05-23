import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxPortalPositionerPopupSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupSkeleton({
  ...rest
}: ComboboxPortalPositionerPopupSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-skeleton',
        styles.ComboboxPortalPositionerPopup,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
