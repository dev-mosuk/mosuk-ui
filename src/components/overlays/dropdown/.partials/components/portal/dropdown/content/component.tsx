import { DropdownPortalDropdownContentProps } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/content/component.interface';
import styles from '@/components/overlays/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownPortalDropdownContent({
  ...rest
}: DropdownPortalDropdownContentProps) {
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
