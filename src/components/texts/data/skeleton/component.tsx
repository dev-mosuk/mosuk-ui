import { Skeleton } from '@/components/display/skeleton/component/component';
import { DataSkeletonProps } from '@/components/texts/data/skeleton/component.interface';
import styles from '@/components/texts/data/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
