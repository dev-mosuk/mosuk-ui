import { DropdownPortalProps } from '@/components/dropdown/.partials/components/portal/component.interface';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownPortal({ ...rest }: DropdownPortalProps) {
  return (
    <Popover.Portal
      {...rest}
      className={classNames(
        'mosuk-dropdown-portal',
        '@container/dropdown',
        'group/dropdown',
        rest?.className,
      )}
    >
      {rest?.children}
    </Popover.Portal>
  );
}
