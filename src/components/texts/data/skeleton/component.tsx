import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { DataSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function DataSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: DataSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames(
        'mosuk-data-skeleton',
        styles.data,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
