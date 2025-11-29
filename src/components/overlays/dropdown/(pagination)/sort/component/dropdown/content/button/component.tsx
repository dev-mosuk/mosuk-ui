import classNames from 'classnames';
import { ArrowUp } from 'lucide-react';
import React, { useContext } from 'react';
import { Button } from '../../../../../../../../actions/button/component';
import { DropdownPaginationSortContext } from '../../../component';
import styles from '../../../component.module.css';
import { DropdownPaginationSortDropdownContentButtonProps } from './component.interface';

export function DropdownPaginationSortDropdownContentButton({
  sort,
  ...rest
}: DropdownPaginationSortDropdownContentButtonProps) {
  const { currentSort, currentOrder, handleSort } = useContext(
    DropdownPaginationSortContext
  );

  if (!DropdownPaginationSortContext) {
    throw new Error(
      'DropdownPaginationSort.Dropdown.Content.Button must be used within an DropdownPaginationSort component.'
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
