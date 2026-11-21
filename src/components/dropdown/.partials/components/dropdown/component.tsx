import { DropdownDropdownProps } from '@/components/dropdown/.partials/components/dropdown/component.interface';
import styles from '@/components/dropdown/.partials/styles/component.module.css';
import { useDropdown } from '@/components/dropdown/.partials/hooks/hook';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownDropdown({ ...rest }: DropdownDropdownProps) {
  const { keepMounted, container } = useDropdown();

  return (
    <Popover.Portal
      keepMounted={keepMounted}
      container={container}
      className={classNames(
        'mosuk-dropdown',
        '@container/dropdown',
        'group/dropdown',
      )}
    >
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
    </Popover.Portal>
  );
}
