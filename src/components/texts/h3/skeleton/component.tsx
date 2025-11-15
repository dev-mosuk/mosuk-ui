import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H3SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H3Skeleton<C extends ElementType = 'div'>({ as, ...rest }: H3SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h3-skeleton', styles.h3, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
