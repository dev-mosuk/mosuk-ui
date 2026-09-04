import { SkeletonProps } from '@/components/core/skeleton/component/component.interface';
import styles from '@/components/core/skeleton/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Skeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-skeleton', styles.skeleton, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
