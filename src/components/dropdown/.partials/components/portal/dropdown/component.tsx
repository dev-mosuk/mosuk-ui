import { DropdownPortalDropdownProps } from '@/components/dropdown/.partials/components/portal/dropdown/component.interface';
import styles from '@/components/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownPortalDropdown({
  ...rest
}: DropdownPortalDropdownProps) {
  return (
    <Popover.Positioner
      {...rest}
      className={classNames(
        'mosuk-dropdown-dropdown',
        styles.dropdown,
        rest?.className,
      )}
    >
      {rest?.children}
    </Popover.Positioner>
  );
}
