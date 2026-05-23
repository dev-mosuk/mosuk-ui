import { Skeleton } from '@/components/display/skeleton/component/component';
import { H2SkeletonProps } from '@/components/texts/h2/skeleton/component.interface';
import styles from '@/components/texts/h2/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
