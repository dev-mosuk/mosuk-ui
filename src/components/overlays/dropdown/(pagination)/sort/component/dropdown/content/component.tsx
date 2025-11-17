import React, { useContext } from 'react';
import { DropdownDropdownContent } from '../../../../../component/component';
import { DropdownPaginationSortContext } from '../../component';
import styles from '../../component.module.css';
import { DropdownPaginationSortDropdownContentProps } from './component.interface';

export function DropdownPaginationSortDropdownContent({
  ...props
}: DropdownPaginationSortDropdownContentProps) {
  const context = useContext(DropdownPaginationSortContext);

  if (!context) {
    throw new Error(
      'DropdownPaginationSort.Dropdown.Content must be used within an DropdownPaginationSort component.'
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
