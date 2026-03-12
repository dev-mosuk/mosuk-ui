import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { H3SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H3Skeleton<C extends ElementType = 'h3'>({
  as,
  ...rest
}: H3SkeletonProps<C>) {
  const Component = (as || 'h3') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-h3-skeleton', styles.h3, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
