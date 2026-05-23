import styles from '@/components/actions/combobox/component/.partials/styles/component.module.css';
import { ComboboxPopupSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/popup/component.interface';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPopupSkeleton({ ...rest }: ComboboxPopupSkeletonProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-combobox-popup-skeleton',
        styles.popup,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
