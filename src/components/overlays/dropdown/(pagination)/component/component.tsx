import React, { createContext } from 'react';
import { Dropdown } from '../../component';
import { PaginationSortContextProps, PaginationSortProps } from './component.interface';

export const PaginationSortContext = createContext<PaginationSortContextProps>({
  currentSort: undefined,
  currentOrder: undefined,
  handleSort: () => {},
});

export function PaginationSort({ params, updateParams, ...props }: PaginationSortProps) {
  const currentSort = params?.sort || 'id';
  const currentOrder = params?.order || 'asc';

  const handleSort = (sort: string) => {
    if (sort === currentSort) {
      const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';

      if (newOrder !== currentOrder) {
        const { page, ...restParams } = params;
        updateParams({
          ...restParams,
          order: newOrder,
        });
      }
    } else {
      const { page, ...restParams } = params;

      updateParams({
        ...restParams,
        sort: sort,
        order: 'asc',
      });
    }
  };

  return (
    <PaginationSortContext.Provider value={{ currentSort, currentOrder, handleSort }}>
      <Dropdown {...props}>{props?.children}</Dropdown>
    </PaginationSortContext.Provider>
  );
}
