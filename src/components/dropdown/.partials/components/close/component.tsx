import { DropdownCloseProps } from '@/components/dropdown/.partials/components/close/component.interface';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownClose({ ...rest }: DropdownCloseProps) {
  return (
    <Popover.Close
      {...rest}
      className={classNames('mosuk-dropdown-close', rest?.className)}
    >
      {rest?.children}
    </Popover.Close>
  );
}
