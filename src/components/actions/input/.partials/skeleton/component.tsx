import { InputSkeletonProps } from '@/components/actions/input/.partials/skeleton/component.interface';
import styles from '@/components/actions/input/.partials/skeleton/component.module.css';
import { Skeleton } from '@/components/core/skeleton/component';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function InputSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: InputSkeletonProps<C>) {
  const Component = (as || Skeleton) as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-input-skeleton',
        styles.input,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
