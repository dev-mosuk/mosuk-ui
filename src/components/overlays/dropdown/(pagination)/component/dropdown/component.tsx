import classNames from 'classnames';
import React, { useContext } from 'react';
import { DropdownDropdown } from '../../../component/component';
import { PaginationSortContext } from '../component';
import styles from '../component.module.css';
import { PaginationSortDropdownProps } from './component.interface';

export function PaginationSortDropdown({
  ...rest
}: PaginationSortDropdownProps) {
  const context = useContext(PaginationSortContext);

  if (!context) {
    throw new Error(
      'PaginationSort.Dropdown must be used within an PaginationSort component.'
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
