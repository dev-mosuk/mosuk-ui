import classNames from 'classnames';
import React from 'react';
import { Row } from '../../../../../display/row/component/component';
import styles from '../component.module.css';
import { PaginationTableSkeletonHeadProps } from './component.interface';

export function PaginationTableSkeletonHead({
  ...props
}: PaginationTableSkeletonHeadProps) {
  return (
    <Row {...props} className={classNames(styles.head, props?.className)}>
      {props?.children}
    </Row>
  );
}
