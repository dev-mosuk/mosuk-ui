import React, { useContext } from 'react';
import { Row } from '../../../../../../display/row/component/component';
import { PaginationTableContext } from '../../component';
import styles from '../../component.module.css';
import { PaginationTableBodyRowProps } from './component.interface';

export function PaginationTableBodyRow({
  ...props
}: PaginationTableBodyRowProps) {
  const context = useContext(PaginationTableContext);

  if (!context) {
    throw new Error(
      'PaginationTableBodyRow must be used within PaginationTable'
    );
  }

  return (
    <Row {...props} className={`${styles.row} ${props?.className ?? ''}`}>
      {props?.children}
    </Row>
  );
}
