import { Skeleton } from '@/components/display/skeleton/component/component';
import { ASkeletonProps } from '@/components/texts/a/skeleton/component.interface';
import styles from '@/components/texts/a/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function ASkeleton<C extends ElementType = 'a'>({
  as,
  ...rest
}: ASkeletonProps<C>) {
  const Component = (as || 'a') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-a-skeleton', styles.a, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
