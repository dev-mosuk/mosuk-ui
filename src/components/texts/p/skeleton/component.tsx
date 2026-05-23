import { Skeleton } from '@/components/display/skeleton/component/component';
import { PSkeletonProps } from '@/components/texts/p/skeleton/component.interface';
import styles from '@/components/texts/p/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function PSkeleton<C extends ElementType = 'p'>({
  as,
  ...rest
}: PSkeletonProps<C>) {
  const Component = (as || 'p') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-p-skeleton', styles.p, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
