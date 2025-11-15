import React, { useContext } from 'react';
import { DropdownDropdownContent } from '../../../../component/component';
import { PaginationSortContext } from '../../component';
import styles from '../../component.module.css';
import { PaginationSortDropdownContentProps } from './component.interface';

export function PaginationSortDropdownContent({
  ...props
}: PaginationSortDropdownContentProps) {
  const context = useContext(PaginationSortContext);

  if (!context) {
    throw new Error(
      'PaginationSort.Dropdown.Content must be used within an PaginationSort component.'
    );
  }

  return (
    <DropdownDropdownContent
      {...props}
      className={
        (styles.dropdownContent ?? '') + ' ' + (props?.className ?? '')
      }
    >
      {props?.children}
    </DropdownDropdownContent>
  );
}
