import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { ASkeletonProps } from './component.interface';
import styles from './component.module.css';

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
