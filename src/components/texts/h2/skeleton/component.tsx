import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { H2SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H2Skeleton<C extends ElementType = 'h2'>({
  as,
  ...rest
}: H2SkeletonProps<C>) {
  const Component = (as || 'h2') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-h2-skeleton', styles.h2, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
