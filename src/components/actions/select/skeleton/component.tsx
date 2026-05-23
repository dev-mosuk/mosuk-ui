import { InputSkeletonProps } from '@/components/actions/select/skeleton/component.interface';
import styles from '@/components/actions/select/skeleton/component.module.css';
import { Skeleton } from '@/components/display/skeleton/component/component';
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
