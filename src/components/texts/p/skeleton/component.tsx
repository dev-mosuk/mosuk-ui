import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { PSkeletonProps } from './component.interface';
import styles from './component.module.css';

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
