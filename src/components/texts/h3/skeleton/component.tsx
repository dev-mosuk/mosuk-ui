import { Skeleton } from '@/components/display/skeleton/component/component';
import { H3SkeletonProps } from '@/components/texts/h3/skeleton/component.interface';
import styles from '@/components/texts/h3/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
