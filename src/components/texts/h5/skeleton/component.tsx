import { Skeleton } from '@/components/display/skeleton/component/component';
import { H5SkeletonProps } from '@/components/texts/h5/skeleton/component.interface';
import styles from '@/components/texts/h5/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H5Skeleton<C extends ElementType = 'h5'>({
  as,
  ...rest
}: H5SkeletonProps<C>) {
  const Component = (as || 'h5') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-h5-skeleton', styles.h5, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
