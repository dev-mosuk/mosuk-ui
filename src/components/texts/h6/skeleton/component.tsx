import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { H6SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H6Skeleton<C extends ElementType = 'h6'>({
  as,
  ...rest
}: H6SkeletonProps<C>) {
  const Component = (as || 'h6') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-h6-skeleton', styles.h6, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
