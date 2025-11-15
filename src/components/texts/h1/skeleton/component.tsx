import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H1SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H1Skeleton<C extends ElementType = 'div'>({ as, ...rest }: H1SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h1-skeleton', styles.h1, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
