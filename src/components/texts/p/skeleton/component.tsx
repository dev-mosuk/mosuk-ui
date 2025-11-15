import classNames from 'classnames';
import React, { ElementType } from 'react';
import { PSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function PSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: PSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-p-skeleton', styles.p, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
