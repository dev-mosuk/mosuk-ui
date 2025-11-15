import { ChevronUp } from 'lucide-react';
import React, { useContext } from 'react';
import { Icon } from '../../../../../../actions/icon/component/component';
import { P } from '../../../../../../texts/p/component/component';
import { PaginationTableContext } from '../../component';
import styles from '../../component.module.css';
import { PaginationTableHeadColumnProps } from './component.interface';

export function PaginationTableHeadColumn({
  ...props
}: PaginationTableHeadColumnProps) {
  const context = useContext(PaginationTableContext);

  if (!context) {
    throw new Error(
      'PaginationTableHeadColumn must be used within PaginationTable'
    );
  }

  const { params, updateParams } = context;

  const currentSort = params?.sort || 'id';
  const currentOrder = params?.order || 'asc';

  return (
    <button
      type="button"
      className={`  
          ${styles.column}          
          ${currentOrder === 'asc' ? styles.asc : styles.desc}
          ${props?.sort === currentSort ? styles.active : ''} 
          ${!props?.sort ? styles.disabled : ''}
          ${props?.className ?? ''}
      `}
      title={props?.title}
      onClick={() =>
        updateParams({
          ...params,
          sort: props?.sort,
          order:
            currentSort === props?.sort
              ? currentOrder === 'asc'
                ? 'desc'
                : 'asc'
              : 'asc',
        })
      }
    >
      <P className={styles.text}>{props?.children}</P>

      {props?.sort && (
        <Icon as='span' className={styles.icon}>
          <ChevronUp />
        </Icon>
      )}
    </button>
  );
}
