import { DropdownOverviewProps } from '@/components/dropdown/.partials/components/overview/component.interface';
import {
  DROPDOWN_OVERVIEW_DEFAULT_ALIGN,
  DROPDOWN_OVERVIEW_DEFAULT_SIDE_OFFSET,
} from '@/components/dropdown/.partials/constants/component.constants';
import { useDropdown } from '@/components/dropdown/.partials/hooks/hook';
import styles from '@/components/dropdown/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownOverview({ ...rest }: DropdownOverviewProps) {
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
        align={rest.align ?? DROPDOWN_OVERVIEW_DEFAULT_ALIGN}
        sideOffset={rest.sideOffset ?? DROPDOWN_OVERVIEW_DEFAULT_SIDE_OFFSET}
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
