import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { InputSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function InputSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: InputSkeletonProps<C>) {
  const Component = (as || Skeleton) as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-input-skeleton', styles.input, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
 