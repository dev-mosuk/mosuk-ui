import classNames from 'classnames';
import React, { useContext } from 'react';
import { DropdownDropdown } from '../../../../component/component';
import { DropdownPaginationSortContext } from '../component';
import styles from '../component.module.css';
import { DropdownPaginationSortDropdownProps } from './component.interface';

export function DropdownPaginationSortDropdown({
  ...rest
}: DropdownPaginationSortDropdownProps) {
  const context = useContext(DropdownPaginationSortContext);

  if (!context) {
    throw new Error(
      'DropdownPaginationSort.Dropdown must be used within an DropdownPaginationSort component.'
    );
  }

  return (
    <DropdownDropdown
      {...rest}
      align={rest?.align ?? 'end'}
      className={classNames(styles.dropdown, rest?.className)}
    >
      {rest?.children}
    </DropdownDropdown>
  );
}
