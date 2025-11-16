import classNames from 'classnames';
import { ArrowUp } from 'lucide-react';
import React, { useContext } from 'react';
import { Button } from '../../../../../../../actions/button/component';
import { PaginationSortContext } from '../../../component';
import styles from '../../../component.module.css';
import { PaginationSortDropdownContentButtonProps } from './component.interface';

export function PaginationSortDropdownContentButton({
  sort,
  ...rest
}: PaginationSortDropdownContentButtonProps) {
  const { currentSort, currentOrder, handleSort } = useContext(
    PaginationSortContext
  );

  if (!PaginationSortContext) {
    throw new Error(
      'PaginationSort.Dropdown.Content.Button must be used within an PaginationSort component.'
    );
  }

  return (
    <Button
      {...rest}
      as="span"
      className={classNames(styles.button, {
        [styles.active]: currentSort === sort,
        [styles.asc]: currentOrder === 'asc',
        [styles.desc]: currentOrder === 'desc',
      })}
      onClick={() => handleSort(sort)}
    >
      {rest?.children}
      <ArrowUp className={styles.arrow} />
    </Button>
  );
}
