import { DropdownDropdownContentProps } from '@/components/overlays/dropdown/.partials/components/dropdown/content/component.interface';
import styles from '@/components/overlays/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownDropdownContent({
  ...rest
}: DropdownDropdownContentProps) {
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
