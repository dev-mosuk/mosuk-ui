import React, { useContext } from 'react';
import { DropdownTrigger } from '../../../component/component';
import { PaginationSortContext } from '../component';
import { PaginationSortTriggerProps } from './component.interface';

export function PaginationSortTrigger({
  ...props
}: PaginationSortTriggerProps) {
  const context = useContext(PaginationSortContext);

  if (!context) {
    throw new Error(
      'PaginationSort.Dropdown must be used within an PaginationSort component.'
    );
  }

  return (
    <DropdownTrigger {...props}>
      {props?.children}
    </DropdownTrigger>
  );
}
