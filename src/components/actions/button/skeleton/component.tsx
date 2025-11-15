import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { ButtonSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function ButtonSkeleton({ ...rest }: ButtonSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames('mosuk-button-skeleton', styles.button, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
