import { DropdownOverviewPopupProps } from '@/components/dropdown/.partials/components/overview-popup/component.interface';
import styles from '@/components/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownOverviewPopup({
  ...rest
}: DropdownOverviewPopupProps) {
  return (
    <Popover.Popup
      {...rest}
      className={classNames(
        'mosuk-dropdown-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Popover.Popup>
  );
}
