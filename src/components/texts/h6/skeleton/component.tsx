import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H6SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H6Skeleton<C extends ElementType = 'div'>({ as, ...rest }: H6SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h6-skeleton', styles.h6, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
