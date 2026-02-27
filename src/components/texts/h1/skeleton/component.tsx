import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { H1SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H1Skeleton<C extends ElementType = 'h1'>({
  as,
  ...rest
}: H1SkeletonProps<C>) {
  const Component = (as || 'h1') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-h1-skeleton', styles.h1, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
