import { Skeleton } from '@/components/display/skeleton/component/component';
import { H4SkeletonProps } from '@/components/texts/h4/skeleton/component.interface';
import styles from '@/components/texts/h4/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
