import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H5SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H5Skeleton<C extends ElementType = 'div'>({ as, ...rest }: H5SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h5-skeleton', styles.h5, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
