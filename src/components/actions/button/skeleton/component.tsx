import classNames from 'classnames';
import React from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import styles from './../component/component.module.css';
import { ButtonSkeletonProps } from './component.interface';

export function ButtonSkeleton({ ...rest }: ButtonSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-button-skeleton',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
