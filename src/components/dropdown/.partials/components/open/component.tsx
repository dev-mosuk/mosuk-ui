import { DropdownOpenProps } from '@/components/dropdown/.partials/components/open/component.interface';
import styles from '@/components/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownOpen({ isDisabled, ...rest }: DropdownOpenProps) {
  return (
    <Popover.Trigger
      {...rest}
      disabled={isDisabled}
      className={classNames(
        'mosuk-dropdown-open',
        styles.trigger,
        rest?.className,
      )}
    >
      {rest?.children}
    </Popover.Trigger>
  );
}
