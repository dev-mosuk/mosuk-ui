import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxPortalPositionerPopupListSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/list/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListSkeleton({
  ...rest
}: ComboboxPortalPositionerPopupListSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-skeleton',
        styles.ComboboxPortalPositionerPopupList,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
