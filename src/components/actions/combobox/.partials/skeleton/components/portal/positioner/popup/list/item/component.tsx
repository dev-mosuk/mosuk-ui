import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { ComboboxPortalPositionerPopupListItemSkeletonProps } from '@/components/actions/combobox/.partials/skeleton/components/portal/positioner/popup/list/item/component.interface';
import { Skeleton } from '@/components/core/skeleton/component';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositionerPopupListItemSkeleton({
  ...rest
}: ComboboxPortalPositionerPopupListItemSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-combobox-portal-positioner-popup-list-item-skeleton',
        styles.ComboboxPortalPositionerPopupListItem,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
