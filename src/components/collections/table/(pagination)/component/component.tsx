import React, { createContext } from 'react';
import { PaginationTableContextProps, PaginationTableProps } from './component.interface';
import styles from './component.module.css';

export const PaginationTableContext = createContext<PaginationTableContextProps>({
  params: undefined,
  updateParams: () => Promise.resolve(),
});

export function PaginationTable({ params, updateParams, ...props }: PaginationTableProps) {
  return (
    <PaginationTableContext.Provider value={{ params, updateParams }}>
      <div {...props} className={`${styles.table} ${props?.className ?? ''}`}>
        {props?.children}
      </div>
    </PaginationTableContext.Provider>
  );
}
