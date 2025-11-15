import React, { useContext } from 'react';
import { PaginationTableContext } from '../component';
import styles from '../component.module.css';
import { PaginationTableBodyProps } from './component.interface';

export function PaginationTableBody({ ...props }: PaginationTableBodyProps) {
  const context = useContext(PaginationTableContext);

  if (!context) {
    throw new Error('PaginationTableBody must be used within PaginationTable');
  }

  return (
    <div {...props} className={`${styles.body} ${props?.className ?? ''}`}>
      {props?.children}
    </div>
  );
}