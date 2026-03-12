import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { H4SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H4Skeleton<C extends ElementType = 'h4'>({
  as,
  ...rest
}: H4SkeletonProps<C>) {
  const Component = (as || 'h4') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames('mosuk-h4-skeleton', styles.h4, rest?.className)}
    >
      {rest?.children}
    </Skeleton>
  );
}
