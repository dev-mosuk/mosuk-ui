import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxPortalPositionerPopupListItemSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/list/item/component.interface';
import { Skeleton } from '@/components/core/skeleton/component/component';
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
