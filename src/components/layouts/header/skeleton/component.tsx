import classNames from 'classnames';
import React, { ElementType } from 'react';
import { HeaderSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function HeaderSkeleton<C extends ElementType = 'header'>({
  ...rest
}: HeaderSkeletonProps<C>) {
  const Component = (rest?.as || 'header') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-header-skeleton', styles.header, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
