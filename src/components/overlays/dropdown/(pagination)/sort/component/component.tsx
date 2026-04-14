import React, { createContext } from 'react';
import { Dropdown } from '../../../component';
import { DropdownPaginationSortContextProps, DropdownPaginationSortProps } from './component.interface';

export const DropdownPaginationSortContext = createContext<DropdownPaginationSortContextProps>({
  currentSort: undefined,
  currentOrder: undefined,
  handleSort: () => { },
});

export function DropdownPaginationSort({ params, updateParams, ...props }: DropdownPaginationSortProps) {
  const currentSort = params?.sort || 'id';
  const currentOrder = params?.order || 'asc';

  const handleSort = (sort: string) => {
    if (sort === currentSort) {
      const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';

      if (newOrder !== currentOrder) {
        const { page, ...restParams } = params as Record<string, any>;
        updateParams?.({
          ...restParams,
          order: newOrder,
        });
      }
    } else {
      const { ...restParams } = params;

      updateParams?.({
        ...restParams,
        sort: sort,
        order: 'asc',
      });
    }
  };

  return (
    <DropdownPaginationSortContext.Provider value={{ currentSort, currentOrder, handleSort }}>
      <Dropdown {...props}>{props?.children}</Dropdown>
    </DropdownPaginationSortContext.Provider>
  );
}
