import React, { useContext } from 'react';
import { DropdownTrigger } from '../../../../component/component';
import { DropdownPaginationSortContext } from '../component';
import { DropdownPaginationSortTriggerProps } from './component.interface';

export function DropdownPaginationSortTrigger({
  ...props
}: DropdownPaginationSortTriggerProps) {
  const context = useContext(DropdownPaginationSortContext);

  if (!context) {
    throw new Error(
      'DropdownPaginationSort.Dropdown must be used within an DropdownPaginationSort component.'
    );
  }

  return (
    <DropdownTrigger {...props}>
      {props?.children}
    </DropdownTrigger>
  );
}
