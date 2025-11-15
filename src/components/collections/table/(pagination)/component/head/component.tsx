import React, { useContext } from 'react';
import { Row } from '../../../../../display/row/component';
import { PaginationTableContext } from '../component';
import styles from '../component.module.css';
import { PaginationTableHeadProps } from './component.interface';

export function PaginationTableHead({ ...props }: PaginationTableHeadProps) {
  const context = useContext(PaginationTableContext);

  if (!context) {
    throw new Error('PaginationTableHead must be used within PaginationTable');
  }

  return (
    <Row {...props} className={`${styles.head} ${props?.className ?? ''}`}>
      {props?.children}
    </Row>
  );
}
